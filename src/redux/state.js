let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 1, message: "It's my first post", likesCount: 20},
            {id: 1, message: "It's my second post", likesCount: 25},
            {id: 1, message: "It's my third post", likesCount: 30},
        ],
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