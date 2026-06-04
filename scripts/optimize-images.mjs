// Convertit les images de public/images en WebP (redimensionnées).
// Réexécutable : régénère les .webp à partir des .png/.jpg encore présents.
//   node scripts/optimize-images.mjs
import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Images référencées dans index.html (favicon / Open Graph) : on les garde en
// PNG pour ne pas avoir à toucher index.html.
const EXCLUDE = new Set([
    "public/images/stone.png",
    "public/images/home/glave.png",
]);

async function* walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(p);
        else if (/\.(png|jpe?g)$/i.test(entry.name)) yield p;
    }
}

let converted = 0;
let errors = 0;

for await (const file of walk("public/images")) {
    if (EXCLUDE.has(file)) continue;
    const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
    // Le lore est consultable en grand (galerie zoomable) → cap plus haut.
    const maxWidth = file.includes("/lore/") ? 1600 : 1000;
    try {
        await sharp(file)
            .resize({ width: maxWidth, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(out);
        converted += 1;
    } catch (error) {
        console.error("ERREUR", file, error.message);
        errors += 1;
    }
}

console.log(`Terminé : ${converted} converties, ${errors} erreurs.`);
