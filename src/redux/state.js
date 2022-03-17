const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'ADD-MESSAGE-TO-DIALOG';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 20},
                {id: 3, message: "It's my second post", likesCount: 25},
                {id: 4, message: "It's my third post", likesCount: 30},
            ],
            newPostText: "IT",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Victor"},
                {id: 2, name: "Maksim"},
                {id: 3, name: "Alexey"},
                {id: 4, name: "Maria"},
                {id: 5, name: "Katya"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Hello"},
                {id: 4, message: "Let's go!"},
                {id: 5, message: "Yo!"},
            ],
            newMessageBody: "new message"
        },
        sidebar: {},
        NavLinkData: [
            {id: 1, path: '/profile', title: 'Profile'},
            {id: 2, path: '/dialogs', title: 'Messages'},
            {id: 3, path: '/news', title: 'News'},
            {id: 4, path: '/music', title: 'Music'},
            {id: 5, path: '/settings', title: 'Settings'},
        ],
    },
    _callSubscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this.state)
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
            //     let newPost = {                                         // 'Здравый рефакторинг'
            //         id: 5,
            //         message: this._state.profilePage.newPostText,
            //         likesCount: 0
            //     };
            //     this._state.profilePage.posts.push(newPost)
            //     this._state.profilePage.newPostText = ''
            //     this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
            // this._state.profilePage.newPostText = action.newText
            // this._callSubscriber(this.state)
        }
        if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push(newMessage)

            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }
    },
    _addMessageToDialog() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    _updateTextMessage(newTextMessage) {
        this._state.dialogsPage.newMessageText = newTextMessage
        this._callSubscriber(this._state)
    }
}



export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_BODY, body: newMessage})

export default store;
// let rerenderEntireTree = () => {
//     console.log('State is changed')
// }

// Create pattern - observer.

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// }


// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }

// Add Message in dialogs

// export const addMessageToDialog = () => {
//     let newMessage = {
//         id: 5,
//         message: state.dialogsPage.newMessageText
//     }
//     state.dialogsPage.messages.push(newMessage)
//     state.dialogsPage.newMessageText = ''
//     rerenderEntireTree(state)
// }

// export const updateTextMessage = (newTextMessage) => {
//     state.dialogsPage.newMessageText = newTextMessage
//     rerenderEntireTree(state)
// }



