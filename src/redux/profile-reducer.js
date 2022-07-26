let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let NEW_POSTS = 'NEW-POSTS';


let initialState = {
    postsData: [
    { id: 1, post: 'It is my first post', likes: 10 },
    { id: 2, post: 'hello world', likes: 25 }
],
    newPostText: 'enter a post'}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POSTS:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
     
}



export const newPostsCreateAction = () => ({
    type: NEW_POSTS
});

export const updateNewPostsTextCreateAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer;