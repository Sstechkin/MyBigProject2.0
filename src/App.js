import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from  './components/Setting/Setting';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wripper'>
                <Header />
                <NavBar recFriends={props.state.sidebar} />
                <div className='app-wripper-content'>
                    <Routes>
                        <Route path='/Dialogs/*' element={<Dialogs messages={props.state.messagesPage}/>} />
                        <Route path='/Profile/*' element={<Profile state={props.state.profilePage}
                         updateNewPostText={props.updateNewPostText} newPosts={props.newPosts} />} />
                        <Route path='/News/*' element={<News />} />
                        <Route path='/Music/*' element={<Music />} />
                        <Route path='/Setting/*' element={<Setting />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}




export default App;
