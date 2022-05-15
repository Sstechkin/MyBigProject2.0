import React from 'react'
import style from './message.module.css'



const Message = (props) => {


    return (
        <div className={style.messageItem}>
            <div className={style.messages}> <div className={style.Ava}></div> {props.message}</div>
        </div>
    )
}


export default Message;