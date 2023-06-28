import React, { useEffect, useRef, useState } from 'react'
import './Notif.scss';

let pushNotif;
let prevTimeout;

const Notif = () => {

    const [content, setContent] = useState();
    const divRef = useRef(null);

    pushNotif = (msg) => {
        setContent(msg);
    }

    useEffect(() => {
        setTimeout(() => {
            divRef?.current?.classList.add('active');
        }, 0);
        clearTimeout(prevTimeout);
        prevTimeout = setTimeout(() => {
            divRef?.current?.classList.remove('active');
        }, 5000);
    }, [content])

    return (
        <div id='notifCont'>
            <div ref={divRef}>{content}</div>
        </div>
    )
}

export { pushNotif }
export default Notif