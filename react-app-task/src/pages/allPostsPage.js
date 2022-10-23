import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";
// import FilterPosts from "../components/FilterPosts";
import {post} from "../plugins/http";
import FilterPosts from "../components/FilterPosts"

const AllPostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        const getPosts = async () => {
            const res = await post("find", {username: ""})
            console.log(res)
            setPosts(res.posts)
        }
        getPosts()
    }, [])

    const postRemoved = (id) => {
        let myPosts = [...posts]
        myPosts = myPosts.filter(x => x._id !== id)
        setPosts(myPosts)
    }

    return (
        <div className="p50">
            <FilterPosts setPosts={setPosts}/>
            <div className="d-flex flex-wrap mt20">
                {posts.map((x, i) => <SinglePost postRemoved={postRemoved} key={i} post={x}/>)}
            </div>

        </div>
    );
};

export default AllPostsPage;