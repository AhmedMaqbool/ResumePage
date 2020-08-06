import React from 'react'
import profile from '../../Assets/profile.jpg';
import  '../ProfileImage/image.css';



const ProfileImage=()=> {
    return (
        <div>
            <img src={profile} alt="Profile" className="profileImage" width='150px' height='150px' />
        </div>
    )
}

export default ProfileImage;
