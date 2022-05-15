import React from 'react';
import MyPosts from './MyPost/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts.postsData} newPosts={props.newPosts} />
        
    </div>
}

export default Profile