import React, { useCallback, useState } from 'react'
import { ReactFlow, addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import 'reactflow/dist/style.css';
import { initialEdges } from "./edges";
import { initialNodes } from "./nodes";
import { defaultEdgeOptions } from "./options";

const updatedNodes: any = [...initialNodes]
updatedNodes.splice(1, 0, {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <>Default Node</> },
    position: { x: 100, y: 125 },
})

const Index = () => {
    const [nodes, setNodes] = useState(updatedNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

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
                />
            </div>
        </>
    )
}

export default Index
