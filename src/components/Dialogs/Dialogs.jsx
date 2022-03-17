import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = props.dialogsPage.messages.map(m => (<Message message={m.message} id={m.id}/>))


    const addMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onChangeUpdateMessageHandler = (e) => {
        let newMessage = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(newMessage))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{  messagesElements  }</div>
                <div>
                    <textarea value={props.dialogsPage.newMessageBody}
                              onChange={onChangeUpdateMessageHandler}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;