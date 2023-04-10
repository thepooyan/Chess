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
            <div id={`${props.children}${8}`} ref={file[7]}></div>
            <div id={`${props.children}${7}`} ref={file[6]}></div>
            <div id={`${props.children}${6}`} ref={file[5]}></div>
            <div id={`${props.children}${5}`} ref={file[4]}></div>
            <div id={`${props.children}${4}`} ref={file[3]}></div>
            <div id={`${props.children}${3}`} ref={file[2]}></div>
            <div id={`${props.children}${2}`} ref={file[1]}></div>
            <div id={`${props.children}${1}`} ref={file[0]}></div>
        </div>
    )
}