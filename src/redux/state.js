
let renderEntireTree = () => {
    alert('hello');
}


let state = {
    profilePage: {
        postsData: [
            { id: 1, post: 'It is my first post', likes: 10 },
            { id: 2, post: 'hello world', likes: 25 }
        ],
        newPostText: 'fff'
    },
    messagesPage: {
        messageData: [
            { message: 'Hello', id: '1' },
            { message: 'How are you', id:'2' },
            { message: 'Im fine', id:'3' },
            {message: 'its cool!', id: '4'}
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

    window.state = state;
     
export let newPosts = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
 

export let updateNewPostText = (text) => {

    state.profilePage.newPostText = text;
    renderEntireTree(state);
}

  export  let subscriber = (observer) => {
        renderEntireTree = observer;
    }



    export default state;


