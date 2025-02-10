export async function setElementStyles(el, styles) {
    for (const [key, value] of Object.entries(styles)) {
        el.style[key] = value;
    }
}