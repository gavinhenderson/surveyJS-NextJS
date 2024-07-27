export const slugify = (input) => {
    return input.toLowerCase().replaceAll(" ", "-")
}