import React from 'react';
import style from './MyPosts.module.css'
import Post from './../MyPost/Post/Post'
import {newPostsCreateAction, updateNewPostsTextCreateAction} from '../../../redux/profile-reducer';

    
    

const MyPosts = (props) => {

    let posts = props.posts.map((post) => <Post post={post.post} likes={post.likes} />);

    let textPost = React.createRef();

    let onPostChange = () => {
        let text = textPost.current.value;
        props.dispatch ( updateNewPostsTextCreateAction(text) );
    }

    let addPost = () => {
        props.dispatch( newPostsCreateAction() );
    };
    
    return <div className={style.Profile}>

        <div>
            <textarea onChange={onPostChange} ref={textPost}  value = {props.newPostText} />

        </div>
        <div>
            <button onClick={addPost}>Add posts</button>
        </div>

        <div className={style.item} > My posts </div>
        <div className={style.item}> New post </div>
        {posts}




    </div>
}

export default MyPosts