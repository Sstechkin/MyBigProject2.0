let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let ADDED_MESSAGE = 'ADDED_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.startMessageArea = action.body;
            return state;
        case ADDED_MESSAGE: 
            let body = state.startMessageArea;
            state.startMessageArea = '';
            state.messageData.push ({message: body, id: '5'});
            return state;
        default: 
        return state;
    }

}

export const updateNewMessageBodyCreateAction = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export const addedNewMessage = () => ({
    type: ADDED_MESSAGE
})

export default dialogsReducer;