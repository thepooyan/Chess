export default function TheFile(props) {
    return (
        <div id={`${props.children}-File`}>
            <div id={`${props.children}${1}`}></div>
            <div id={`${props.children}${2}`}></div>
            <div id={`${props.children}${3}`}></div>
            <div id={`${props.children}${4}`}></div>
            <div id={`${props.children}${5}`}></div>
            <div id={`${props.children}${6}`}></div>
            <div id={`${props.children}${7}`}></div>
            <div id={`${props.children}${8}`}></div>
        </div>
    )
}