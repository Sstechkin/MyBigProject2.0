import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../Dialogs.module.css'




const DialogItem = (props) => {
    return (
        <div className={style.dialogItem}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem;