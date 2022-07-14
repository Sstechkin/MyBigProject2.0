let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let NEW_POSTS = 'NEW-POSTS';



const profileReducer = (state, action) => {
    if (action.type === NEW_POSTS) {
        let newPost = {
            id: 3,
            post: state.newPostText,
            likes: 0
        };
        state.postsData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text;
    } 
    return state 
}



export const newPostsCreateAction = () => ({
    type: NEW_POSTS
});

export const updateNewPostsTextCreateAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer;