import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";

const Dialogs = (props) => {

    /*
    let dialogs = [
        {id: 1, name: "Victor"},
        {id: 2, name: "Maksim"},
        {id: 3, name: "Alexey"},
        {id: 4, name: "Maria"},
        {id: 5, name: "Katya"},
    ]
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Hello"},
        {id: 4, message: "Let's go!"},
        {id: 5, message: "Yo!"},
    ]
    */

    let dialogsElement = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>) )
    let messageElement = props.state.messages.map( m => (<Message message={m.message} id={m.id}/>) )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
                {/*<DialogItem id='1' name="Victor"/>*/}
                {/*<DialogItem id='2' name="Maksim"/>*/}
                {/*<DialogItem id='3' name="Alexey"/>*/}
                {/*<DialogItem id='4' name="Maria"/>*/}
                {/*<DialogItem id='5' name="Katya"/>*/}
            </div>
            <div className={s.messages}>
                { messageElement }

                {/*<Message message='Hi'/>*/}
                {/*<Message message='How are you?'/>*/}
                {/*<Message message='Hello'/>*/}
                {/*<Message message="Let's go!"/>*/}
                {/*<Message message='Yo'/>*/}
            </div>
        </div>
    )
}

export default Dialogs;