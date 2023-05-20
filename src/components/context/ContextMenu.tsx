import React from 'react'

type IContext = {
    children: React.ReactNode,
    top: number,
    left: number,
}

const ContextMenu = ({ children, left, top }: IContext) => {

    return (
        <div style={{
            position: "absolute",
            width: "250px",
            backgroundColor: "#F5F5F5",
            borderRadius: '4px',
            top: `${top}px`,
            left: `${left}px`,
            padding: "10px 0"
        }}>{children}</div>
    )
}

export default ContextMenu