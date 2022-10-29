import React from 'react'
import ProfilePic from "../assets/images/veed-profile.png";
import shareIcon from "../assets/images/shareIcon.png";
import "./styles/Profile.css"

const Profile = () => {
    return (
        <div id="profile__ctn">
            <img src={shareIcon} alt="share it" id="share__icon"/>
            <img src={ProfilePic} alt="David Johnson" id="profile__img"/>
            <div id="profile__info">
                <p id="twitter">veedjohnson</p>
                {/* <p id="slack">veed</p> */}
            </div>
        </div>
    )
}

export default Profile;