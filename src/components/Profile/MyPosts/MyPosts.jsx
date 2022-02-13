import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postElement = props.posts.map( p => (<Post key={p.id} message={p.message} likesCount={p.likesCount}/>) )

    let newPostElement = React.createRef();

    const addPostClickHandler = () => {
        props.dispatch(addPostActionCreator())
    }

    const onChangeUpdateNewPostText = () => {
        let text = newPostElement.current.value
      //  let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return <div>
        My posts
        <div>
            <div>
                <textarea value={props.newPostText}
                          onChange={onChangeUpdateNewPostText}
                          ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPostClickHandler}>Add post</button>
            </div>
        </div>

        <div className={s.posts}>
            { postElement }
        </div>
    </div>
}

export default MyPosts;