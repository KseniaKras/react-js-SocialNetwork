import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://s6.stc.all.kpcdn.net/russia/wp-content/uploads/2019/12/skajpark-2602.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;