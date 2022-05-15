import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {newPosts} from './redux/state';






export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} newPosts={newPosts} />
        </React.StrictMode>,
        document.getElementById('root')
      );
 }
