import {useRef} from 'react';
import {post} from "../plugins/http";

const FilterPosts = ({setPosts}) => {
    const inpRef = useRef()

    const find = async () => {
        const username = inpRef.current.value
        const res = await post("find", {username})
        console.log(res)
        setPosts(res.posts)
    }

    return (
        <div>
            <input ref={inpRef} type="text" placeholder="username"/>
            <button onClick={find}>Filter</button>
        </div>
    );
};

export default FilterPosts;