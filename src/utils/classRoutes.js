export function toClassSlug(className) {
    return className.toLowerCase().replaceAll(":", "").replaceAll(" ", "-");
}

export function getClassUrl(classItem) {
    const baseUrl = `/classes/${classItem.characterId}/${toClassSlug(classItem.className)}`;

    if (classItem.jobStage === "master") {
        return `${baseUrl}/master`;
    }

    return baseUrl;
}