import React, { useState } from 'react'
import './Notif.scss';

let pushNotif;

const Notif = () => {

    const [content, setContent] = useState();

    pushNotif = (msg) => {
        setContent(<>{content}<div>{msg}</div></>);
    }
    window.pushNotif = pushNotif;

    return (
        <div id='notifCont'>
            {content}
        </div>
    )
}
export { pushNotif }
export default Notif