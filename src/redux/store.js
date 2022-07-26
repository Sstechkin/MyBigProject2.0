//import Message from "../components/Dialogs/message/message";

import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer'

let store = {
    
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: 'It is my first post', likes: 10 },
                { id: 2, post: 'hello world', likes: 25 }
            ],
            newPostText: 'ccc'
        },


        messagesPage: {
            messageData: [
                { message: 'Hello', id: '1' },
                { message: 'How are you', id: '2' },
                { message: 'Im fine', id: '3' },
                { message: 'its cool!', id: '4' }
            ],
            dialogsData: [
                { name: 'Dima', id: '1' },
                { name: 'Valera', id: '2' },
                { name: 'Slava', id: '3' },
                { name: 'Ivan', id: '4' }
            ],

            startMessageArea: 'enter a message'

        },


        sidebar: {
            recFriendsData: [

                { name: 'Andrey', },
                { name: 'Max', },
                { name: 'Ivan', }
            ]
        }
    },


    getState() {
        return this._state;
    },


    _callSubscribe() {
        alert('hello');
    },




    subscribe(observer) {
        this._callSubscribe = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscribe(this._state);
    }

}




window.store = store;
export default store;


