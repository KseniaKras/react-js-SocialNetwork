import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessageToDialog, addPost, updateNewPostText, updateTextMessage} from './redux/state';


const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessageToDialog={addMessageToDialog}
             updateTextMessage={updateTextMessage}/>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree)

rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
