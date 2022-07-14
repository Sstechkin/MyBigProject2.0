let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let ADDED_MESSAGE = 'ADDED_MESSAGE';



const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY ) {
        state.startMessageArea = action.body;
    } else if (action.type === ADDED_MESSAGE) {
        let body = state.startMessageArea;
        state.startMessageArea = '';
        state.messageData.push ({message: body, id: '5'});
    }


    return state
}

export const updateNewMessageBodyCreateAction = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export const addedNewMessage = () => ({
    type: ADDED_MESSAGE
})

export default dialogsReducer;