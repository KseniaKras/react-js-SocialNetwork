let rerenderEntireTree = () => {
    console.log('State is changed')
}

let state = {
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
        newMessageText: "new message"
    },
    sidebar: {},
    NavLinkData: [
        {id: 1, path: '/profile', title: 'Profile'},
        {id: 2, path: '/dialogs', title: 'Messages'},
        {id: 3, path: '/news', title: 'News'},
        {id: 4, path: '/music', title: 'Music'},
        {id: 5, path: '/settings', title: 'Settings'},
    ],
}

export default state;

// Create pattern - observer.

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

// Add post on ProfilePage

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

// Add Message in dialogs

export const addMessageToDialog = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export const updateTextMessage = (newTextMessage) => {
    state.dialogsPage.newMessageText = newTextMessage
    rerenderEntireTree(state)
}



