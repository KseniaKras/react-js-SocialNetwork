import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css';

export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}