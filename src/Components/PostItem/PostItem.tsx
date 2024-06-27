import {Posts} from "../../types.ts";
import React from "react";

interface Props {
    post: Posts
}
const PostItem: React.FC<Props> = ({post}) => {
    return (
        <>
            <div className="card mb-3 container">
                <div className="card-body">
                    <p className="card-text"><small className="text-body-secondary">Created On {post.date}</small></p>
                    <p className="card-text fs-3">{post.title}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-secondary btn-sm fs-5">Read More</button>
                </div>
            </div>
        </>
    );
};

export default PostItem;