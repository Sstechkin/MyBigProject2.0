import React from 'react';
import MyPosts from './MyPost/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.state.postsData} 
        newPostText={props.state.newPostText} dispatch={props.dispatch} store={props.store} />
         </div>
}

export default Profile