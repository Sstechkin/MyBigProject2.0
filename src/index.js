import state from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {newPosts, updateNewPostText, subscriber} from './redux/state';


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} updateNewPostText={updateNewPostText} newPosts={newPosts} />
        </React.StrictMode>,
        document.getElementById('root')
      );
 }


renderEntireTree (state);

subscriber( renderEntireTree );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
