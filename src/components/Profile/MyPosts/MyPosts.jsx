import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = (props) => {

    let postElement = props.posts.map( p => (<Post message={p.message} likesCount={p.likesCount}/>) )

    let newPostElement = React.createRef();

    const addPostClickHandler = () => {
        props.addPost()
    }

    const onChangeUpdateNewPostText = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
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