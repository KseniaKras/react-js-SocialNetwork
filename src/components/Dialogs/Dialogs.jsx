import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {updateTextMessage} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messageElement = props.dialogsPage.messages.map(m => (<Message message={m.message} id={m.id}/>))

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.addMessageToDialog()
    }

    const onChangeUpdateMessageHandler = () => {
        let newMessage = newMessageElement.current.value;
        props.updateTextMessage(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea value={props.dialogsPage.newMessageText}
                          ref={newMessageElement}
                          onChange={onChangeUpdateMessageHandler}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;