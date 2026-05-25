export function scrollToSection(targetId, offset = 96) {
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
    });
}

export function scrollToSectionAfterRender(targetId, offset = 96) {
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            scrollToSection(targetId, offset);
        });
    });
}
