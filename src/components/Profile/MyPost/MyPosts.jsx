import React from 'react';
import style from './MyPosts.module.css'
import Post from './../MyPost/Post/Post'


const MyPosts = (props) => {

    let posts = props.posts.map((post) => <Post post={post.post} likes={post.likes} />);

    let textPost = React.createRef();




    let addPost = () => {
        debugger;
        let text = textPost.current.value;
        props.newPosts(text);
        textPost.current.value = '';
    }

    debugger;

    return <div className={style.Profile}>

        <div>
            <textarea ref={textPost} ></textarea>

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