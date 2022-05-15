import {renderEntireTree} from './../render';

let state = {
    profilePage: {
        postsData: [
            { id: 1, post: 'It is my first post', likes: 10 },
            { id: 2, post: 'hello world', likes: 25 }
        ],
    },
    messagesPage: {
        messageData: [
            { message: 'Hello', id: '1' },
            { message: 'How are you', id:'2' },
            { message: 'Im fine', id:'3' }
        ],
        dialogsData: [
            { name: 'Dima', id: '1' },
            { name: 'Valera', id: '2' },
            { name: 'Slava', id: '3' },
            { name: 'Ivan', id: '3' }
        ]
    },
    sidebar: {
        recFriendsData: [ 
            
            {name: 'Andrey',  },
            {name: 'Max',  },
            {name: 'Ivan',  }
        ]
    }
};

     
export let newPosts = (newMessPosts) => {
    let newPost = {
        id: 3,
        post: newMessPosts,
        likes: 0
    };
    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}
 



    export default state;


