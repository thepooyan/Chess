import { useEffect, useRef } from "react"

export default function TheFile(props) {
    let file = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    if (!props.noRef) {
        useEffect(() => {
            for (let i = 1; i < 9; i++) {
                props.position[`${props.children}${i}`] = { square: file[i - 1].current, name: `${props.children}${i}` };

            }
        })
    }
    let rows = [0, 1, 2, 3, 4, 5, 6, 7];
    if (props.isWhite) rows = rows.slice().reverse();
    return (
        <div>
            {rows.map(i => {
                return <div id={`${props.children}${i + 1}`} ref={!props.noRef ? file[i] : null} key={i}></div>
            })}
        </div>
    )
}