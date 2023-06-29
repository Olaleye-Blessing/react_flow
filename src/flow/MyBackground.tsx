import React, { useState } from 'react'
import { Background, BackgroundVariant, Panel } from "reactflow"

// Use bacground component to display pattern background
// https://reactflow.dev/docs/api/plugin-components/background/

const MyBackground = () => {
    const [variant, setVariant] = useState("cross");

    return (
        <>
            <Background color="#ccc" variant={variant as BackgroundVariant} />
            <Panel position="top-left">
                <p>Variant: </p>
                {["dots", "lines", "cross"].map(va => (
                    <button onClick={() => setVariant(va)}>
                        {va}
                    </button>
                ))}
            </Panel>
        </>
    )
}

export default MyBackground
