import { useEffect, useRef } from "react"

export default function TheFile(props) {
    let file1 = useRef(null);
    let file2 = useRef(null);
    let file3 = useRef(null);
    let file4 = useRef(null);
    let file5 = useRef(null);
    let file6 = useRef(null);
    let file7 = useRef(null);
    let file8 = useRef(null);

    useEffect(() => {
        props.position[`${props.children}1`] = {square: file1.current, name: `${props.children}1`};
        props.position[`${props.children}2`] = {square: file2.current, name: `${props.children}2`};
        props.position[`${props.children}3`] = {square: file3.current, name: `${props.children}3`};
        props.position[`${props.children}4`] = {square: file4.current, name: `${props.children}4`};
        props.position[`${props.children}5`] = {square: file5.current, name: `${props.children}5`};
        props.position[`${props.children}6`] = {square: file6.current, name: `${props.children}6`};
        props.position[`${props.children}7`] = {square: file7.current, name: `${props.children}7`};
        props.position[`${props.children}8`] = {square: file8.current, name: `${props.children}8`};
    })
    return (
        <div>
            <div id={`${props.children}${8}`} ref={file8}></div>
            <div id={`${props.children}${7}`} ref={file7}></div>
            <div id={`${props.children}${6}`} ref={file6}></div>
            <div id={`${props.children}${5}`} ref={file5}></div>
            <div id={`${props.children}${4}`} ref={file4}></div>
            <div id={`${props.children}${3}`} ref={file3}></div>
            <div id={`${props.children}${2}`} ref={file2}></div>
            <div id={`${props.children}${1}`} ref={file1}></div>
        </div>
    )
}