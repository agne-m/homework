import React from 'react';
// import {get} from "../plugins/http";

const SinglePost = ({post, postRemoved}) => {

    // async function remove() {
    //     const res = await get("delete/"+post._id)
    //     console.log(res)
    //     postRemoved(post._id)
    // }

    return (
        <div className="post">
            <img src={post.image} alt=""/>
            <div className="p10">
                <h4>{post.title} </h4>
                <div>{post.username} </div>
                <div>{post.description} </div>
            </div>
            {/* <button onClick={remove}>Delete</button> */}
            <button>Create post</button>

        </div>
    );
};

export default SinglePost;
