import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';
import {updateNewMessageBodyCreateAction, addedNewMessage} from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

      
   let messageElement = props.messages.messageData.map((el) => <Message message={el.message} />) 
   let dialogElement = props.messages.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} />)

    let textMessage = React.createRef();

   let value = props.messages.startMessageArea;


   let onChangeMessageArea = () => {
    let body = textMessage.current.value;
    props.dispatch(updateNewMessageBodyCreateAction(body))
   }

   let addedMessage = () => {
    props.dispatch(addedNewMessage())
   }


    return (
        <div className={style.Dialogs}>
            <div className={style.dialog}>
                {dialogElement}
                

            </div>
            <div className={style.message}>
                {messageElement} 

                <div className={style.addMessage}>
                    <div><textarea value={value} onChange={onChangeMessageArea} ref={textMessage}></textarea></div>

                   <div><button onClick={addedMessage} >Send</button></div>
                </div>

            </div>


        </div>
        
    )
}


export default Dialogs