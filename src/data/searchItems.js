import { characters } from "./characters";
import { classImages } from "./classImages";
import { builds } from "./builds";

function toClassSlug(className) {
    return className.toLowerCase().replaceAll(":", "").replaceAll(" ", "-");
}

export const searchItems = [
    ...characters.map((character) => ({
        id: `character-${character.id}`,
        type: "Personnage",
        title: character.name,
        subtitle: character.role,
        url: `/personnages/${character.id}`,
        keywords: [
            character.name,
            character.fullName,
            character.type,
            character.weapon,
            character.role,
            character.featuredClass,
            ...character.classes
        ]
    })),

    ...classImages.map((classItem) => ({
        id: `class-${classItem.characterId}-${classItem.className}-${classItem.jobStage}`,
        type: "Classe",
        title: classItem.className,
        subtitle: `${classItem.character} — ${classItem.pathName}`,
        url: `/classes/${classItem.characterId}/${toClassSlug(classItem.className)}`,
        keywords: [
            classItem.character,
            classItem.pathName,
            classItem.className,
            classItem.jobStage
        ]
    })),

    ...builds.map((build) => ({
        id: `build-${build.id}`,
        type: "Build",
        title: build.title,
        subtitle: `${build.character} — ${build.className}`,
        url: `/builds/${build.id}`,
        keywords: [
            build.character,
            build.className,
            build.title,
            build.mode,
            build.role,
            build.difficulty,
            ...build.stats,
            ...build.skills
        ]
    }))
];