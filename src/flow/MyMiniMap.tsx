import React from "react";
import { MiniMap } from "reactflow";
import { nodeColor } from "./nodeColor";
// Use MiniMap to get an overview of the whole graph.
// https://reactflow.dev/docs/api/plugin-components/minimap/

const MyMiniMap = () => {
    return (
        <>
            <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
        </>
    )
}

export default MyMiniMap
