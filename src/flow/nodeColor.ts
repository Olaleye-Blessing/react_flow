export const nodeColor = (node) => {
    if (node.type === "input") return "#6ede87";
    if (node.type === "output") return "#6865A5";
    return "#ff0072";
}
