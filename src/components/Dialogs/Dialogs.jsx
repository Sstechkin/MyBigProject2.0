import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';




const Dialogs = (props) => {

    
    
      
   let messageElement = props.messages.messageData.map((el) => <Message message={el.message} />) 
    let dialogElement = props.messages.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} />)

    let textMessage = React.createRef();

    let sendMessage = () => {
        let newMess = textMessage.current.value;
        alert(newMess)
    }    




    return (
        <div className={style.Dialogs}>
            <div className={style.dialog}>
                {dialogElement}
                

            </div>
            <div className={style.message}>
                {messageElement} 

                <div className={style.addMessage}>
                    <textarea ref={textMessage}></textarea>

                    <button onClick={sendMessage}>Send</button>
                </div>

            </div>


        </div>
        
    )
}


export default Dialogs