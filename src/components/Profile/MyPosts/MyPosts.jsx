import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = () => {
    return <div>
        My posts
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>

        <div className={s.posts}>
            <Post message='Hi, how are you?' likesCount='15'/>
            <Post message="It's my first post" likesCount='20'/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}

export default MyPosts;