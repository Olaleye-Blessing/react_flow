import React, { useEffect, useState } from 'react'
import { Panel, PanelPosition } from "reactflow"

// A helper component to display content on top of the React Flow viewport
// https://reactflow.dev/docs/api/plugin-components/panel/
const postions: { [key: string]: PanelPosition } = {
    "top-left": "top-center",
    "top-center": "top-right",
    "top-right": "bottom-right",
    "bottom-right": "bottom-center",
    "bottom-center": "bottom-left",
    "bottom-left": "top-left",
}

const MyPanel = () => {
    const [position, setPosition] = useState<PanelPosition>("top-center");

    useEffect(() => {
        let timer: NodeJS.Timer;

        timer = setInterval(() => {
            setPosition((pos) => postions[pos]);
        }, 3_000);

        return () => clearInterval(timer);
    }, [])

    return (
        <div className=" bg-purple-600 max-w-max ml-auto">
            <p>My Extra panel</p>
            <Panel position={position} className="bg-orange-800 px-6 py-1 rounded-sm">Panel position: {position}</Panel>
        </div>
    )
}

export default MyPanel
