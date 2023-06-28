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
            divRef.current.style.animation = 'unset';
            divRef.current.style.animation = null;
        }, 0);
        console.log('killing timeout', prevTimeout);
        clearTimeout(prevTimeout);
        prevTimeout = setTimeout(() => {
            console.log('timout run: ', prevTimeout)
            divRef?.current?.classList.remove('active');
        }, 5000);
        console.log('timout set: ', prevTimeout)
    }, [content])

    return (
        <div id='notifCont'>
            <div ref={divRef}>{content}</div>
        </div>
    )
}

export { pushNotif }
export default Notif