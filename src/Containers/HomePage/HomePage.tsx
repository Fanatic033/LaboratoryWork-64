import {Posts} from "../../types.ts";
import React from "react";
import PostItem from "../../Components/PostItem/PostItem.tsx";

interface Props {
    posts: Posts[];
}
const HomePage:React.FC<Props> = ({posts}) => {
    return (
        <div>
            <h1 className={'text-center mt-5 '}>Home Page</h1>
            {posts.map((post) => (
                <PostItem key={post.date} post={post}/>
            ))}
        </div>
    );
};

export default HomePage;