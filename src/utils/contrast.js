export function contrastTextFor(hexColor) {
    const value = hexColor.replace("#", "");
    const [r, g, b] = [0, 2, 4]
        .map((i) => parseInt(value.slice(i, i + 2), 16) / 255)
        .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance >= 0.179 ? "#0a0a0a" : "#f5f5f5";
}
