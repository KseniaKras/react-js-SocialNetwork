import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Messages/Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name="Victor"/>
                <DialogItem id='2' name="Maksim"/>
                <DialogItem id='3' name="Alexey"/>
                <DialogItem id='2' name="Maria"/>
                <DialogItem id='2' name="Katya"/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Hello'/>
                <Message message="Let's go!"/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;