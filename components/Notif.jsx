import React, { useEffect, useRef, useState } from 'react'
import './Notif.scss';

let pushNotif;

const Notif = () => {

    const [content, setContent] = useState();

    pushNotif = (msg) => {
        setContent(<><DyingDiv>{msg}</DyingDiv>{content}</>);
    }
    window.pushNotif = pushNotif;

    return (
        <div id='notifCont'>
            {content}
        </div>
    )
}

const DyingDiv = ({ children }) => {
    const divRef = useRef(null);

    setTimeout(() => {
        divRef?.current?.classList.remove('active');
    }, 5000);

    useEffect(() => {
        setTimeout(() => {
            divRef.current.classList.add('active');
        }, 0);
    }, [])

    return (
        <div ref={divRef}>
            {children}
        </div>
    )
}

export { pushNotif }
export default Notif