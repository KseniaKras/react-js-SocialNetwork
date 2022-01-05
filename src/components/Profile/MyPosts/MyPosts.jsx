import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
        <textarea></textarea>
        <button>Add post</button>
        </div>

        <div className={s.posts}>
            <Post message='Hi, how are you?' likesCount='15' />
            <Post message="It's my first post" likesCount='20' />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
}

export default MyPosts;