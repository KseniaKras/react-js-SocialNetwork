import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Maksim
                </div>
                <div className={s.dialog}>
                    Katya
                </div>
                <div className={s.dialog}>
                    Maria
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Let's go!</div>
            </div>
        </div>
    )
}

export default Dialogs;