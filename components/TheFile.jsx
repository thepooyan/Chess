import { useEffect, useRef } from "react"

export default function TheFile(props) {
    let file = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];

    useEffect(() => {
        for (let i=1; i < 9; i++) {
            props.position[`${props.children}${i}`] = {square: file[i-1].current, name: `${props.children}${i}`};

        }
    })
    return (
        <div>
            {[0,1,2,3,4,5,6,7].map(i=>{
                return <div id={`${props.children}${i+1}`} ref={file[i]} key={i}></div>
            })}
        </div>
    )
}