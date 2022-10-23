import React from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    let navigate = useNavigate()

    return (
        <div className='profile-container d-flex flex-column'>
            <img className='profile-img' src="https://images.unsplash.com/photo-1634911059332-0cc49b1ae86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNtaWxleSUyMGVtb2ppfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='profile' />
            <button className='change-photo-btn'>CHANGE PHOTO</button>
            <button className='all-posts-btn' onSubmit={() => {
          navigate('/AllPostsPage');
        }}>ALL POSTS</button>
        </div>
    )
}

export default Profile