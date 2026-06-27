import { useEffect, useRef, useState } from "react";

// Proportions du gabarit, identiques pour toutes les cartes.
const TARGET_HEIGHT = 0.86;
const GROUND_LINE = 0.97;

/* Normalise un portrait en mesurant sa boîte englobante opaque (scan alpha sur
   un canvas réduit), puis applique scale + translation.
   - mode "height"  : cale la HAUTEUR du personnage (présence uniforme). Seuil
     alpha élevé pour ignorer les auras. Utilisé par la grille.
   - mode "contain" : la silhouette VISIBLE entière (effets compris) tient dans
     le cadre, donc rien n'est jamais coupé. Utilisé par les présentations, où des
     persos comme Ève, Chung ou Lu/Ciel ont des effets très étalés. */
function measurePortrait(img, mode = "height") {
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const frame = img.parentElement;
    const frameW = frame.clientWidth;
    const frameH = frame.clientHeight;
    if (!iw || !ih || !frameW || !frameH) return null;

    const SCAN = 150;
    const s = SCAN / iw;
    const cw = Math.max(1, Math.round(iw * s));
    const ch = Math.max(1, Math.round(ih * s));
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, cw, ch);

    // En mode "contain" on abaisse le seuil pour inclure les effets/auras dans la
    // mesure (afin qu'ils tiennent dans le cadre) ; en mode "height" on garde un
    // seuil élevé pour ne mesurer que le corps plein et garder une présence égale.
    const ALPHA = mode === "contain" ? 28 : 110;
    let top = ch, bottom = -1, left = cw, right = -1;
    const data = ctx.getImageData(0, 0, cw, ch).data;
    for (let y = 0; y < ch; y++) {
        for (let x = 0; x < cw; x++) {
            if (data[(y * cw + x) * 4 + 3] > ALPHA) {
                if (y < top) top = y;
                if (y > bottom) bottom = y;
                if (x < left) left = x;
                if (x > right) right = x;
            }
        }
    }
    if (bottom < top || right < left) return null;

    // boîte opaque en pixels rendus (l'image fait frameW de large)
    const r = frameW / iw / s;
    const bTop = top * r;
    const bBottom = (bottom + 1) * r;
    const bHeight = bBottom - bTop;
    const bWidth = (right - left + 1) * r;
    const bCenterX = ((left + right + 1) / 2) * r;

    // Pieds sur une ligne de sol commune, centré horizontalement. En "contain" on
    // borne aussi la largeur : un perso aux effets étalés est réduit juste ce qu'il
    // faut pour rester entier dans le cadre (jamais coupé).
    const targetH = frameH * TARGET_HEIGHT;
    const baseline = frameH * GROUND_LINE;
    const k =
        mode === "contain"
            ? Math.min(targetH / bHeight, (frameW * 0.95) / bWidth)
            : targetH / bHeight;
    const tx = frameW / 2 - k * bCenterX;
    const ty = baseline - k * bBottom;

    return {
        transform: `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${k.toFixed(3)})`,
        transformOrigin: "0 0",
    };
}

// Portrait normalisé réutilisable : mesure son image (au chargement, ou
// immédiatement si déjà en cache) et applique le gabarit commun.
export default function Portrait({ src, alt, eager = false, mode = "height" }) {
    const ref = useRef(null);
    const [style, setStyle] = useState(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        const measure = () => {
            const next = measurePortrait(node, mode);
            if (next) setStyle(next);
        };
        if (node.complete && node.naturalWidth) {
            measure();
            return undefined;
        }
        node.addEventListener("load", measure);
        return () => node.removeEventListener("load", measure);
    }, [src, mode]);

    return (
        <span className="portrait-frame">
            <img
                ref={ref}
                className="portrait-img"
                src={src}
                alt={alt}
                style={style}
                loading={eager ? "eager" : "lazy"}
            />
        </span>
    );
}
