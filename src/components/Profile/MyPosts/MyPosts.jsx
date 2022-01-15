import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 1, message: "It's my first post", likesCount: 20},
        {id: 1, message: "It's my second post", likesCount: 25},
        {id: 1, message: "It's my third post", likesCount: 30},
    ]
    let postElement = posts.map( p => (<Post message={p.message} likesCount={p.likesCount}/>) )
    return <div>
        My posts
        <div>
            <div>
                <textarea>
                </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>

        <div className={s.posts}>
            { postElement }
            {/*<Post message='Hi, how are you?' likesCount='15'/>*/}
            {/*<Post message="It's my first post" likesCount='20'/>*/}
        </div>
    </div>
}

export default MyPosts;