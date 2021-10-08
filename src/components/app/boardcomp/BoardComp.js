import React, { useEffect, useRef, useState } from 'react'
import './boardstyles.scss'
function BoardComp() {
    const [painting, setpainting] = useState(false)
    useEffect(() => {

    }, [painting])
    const cvsRef = useRef(null)
    function startPaint() {
        setpainting(true)
    }
    function stopPaint() {
        setpainting(false)
    }

    function paint(e) {
        const canvas = cvsRef.current
        const ctx = canvas.getContext('2d')
        ctx.lineWidth = 10
        ctx.lineCap = "round"

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

    }
    return (
        <div className="board__">
            <canvas
                style = {{backgroundColor : 'red'}}
                width={window.innerWidth}
                height={window.innerHeight}
                ref={cvsRef}
                onMouseDown={startPaint}
                onMouseUp={stopPaint}
                onMouseMove={e => {
                    if (painting) {
                        paint(e)
                    } else {
                        const canvas = cvsRef.current
                        const ctx = canvas.getContext('2d')
                        ctx.beginPath()
                    }
                }}
            >

            </canvas>
        </div>
    )
}

export default BoardComp
