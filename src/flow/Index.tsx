import React, { useCallback } from 'react'
import { Controls, ReactFlow, addEdge, applyEdgeChanges, applyNodeChanges, useEdgesState, useNodesState } from "reactflow";
import 'reactflow/dist/style.css';
import { initialEdges } from "./edges";
import { initialNodes } from "./nodes";
import { defaultEdgeOptions } from "./options";
import MyMiniMap from "./MyMiniMap";
import MyBackground from "./MyBackground";
import MyPanel from "./MyPanel";

const updatedNodes: any = [...initialNodes]
updatedNodes.splice(1, 0, {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <>Default Node</> },
    position: { x: 100, y: 125 },
})

const Index = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(updatedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <>
            <h1 className="text-5xl text-orange-900">React flow</h1>
            <div className="h-[400px] w-full bg-green-400">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    defaultEdgeOptions={defaultEdgeOptions}
                    fitView
                >
                    {/* React flow comes with customizable control bar */}
                    <Controls />
                    <MyMiniMap />
                    <MyBackground />
                    <MyPanel />
                </ReactFlow>
            </div>
        </>
    )
}

export default Index
