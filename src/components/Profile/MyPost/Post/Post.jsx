import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
   

    return <div className={style.Post}>
        <div className={style.item}> 
        <div className={style.Ava}></div>
         {props.post}
         <div>likes: {props.likes}</div>
        </div>

    </div>
}

export default Post