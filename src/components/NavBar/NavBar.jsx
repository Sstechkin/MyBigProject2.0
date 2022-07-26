import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import RecFriends from './RecFriends/recFrends';

const NavBar = (props) => {
    return <nav className={style.navBar}>
        <div><NavLink to='/Profile' className={(NavData) => NavData.isActive ? style.active : style.item}>Profile</NavLink></div>
        <div><NavLink to='/Dialogs' className={(NavData) => NavData.isActive ? style.active : style.item}>Message</NavLink></div>
        <div><NavLink to='/News' className={(NavData) => NavData.isActive ? style.active : style.item}>News</NavLink></div>
        <div><NavLink to='/Music' className={(NavData) => NavData.isActive ? style.active : style.item}>Music</NavLink></div>
        <div><NavLink to='/Setting' className={(NavData) => NavData.isActive ? style.active : style.item}>Setting</NavLink></div>

        <RecFriends data={props.recFriends.recFriendsData} /> 
          
    </nav>
}

export default NavBar