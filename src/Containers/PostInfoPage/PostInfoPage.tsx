import {Posts} from "../../types.ts";
import React from "react";
import {Link, useParams} from "react-router-dom";

interface Props {
    getPostById: (id: string) => Posts | undefined;
}

const PostInfoPage: React.FC<Props> = ({getPostById}) => {
    const {id} = useParams();
    const post = getPostById(id as string);

    if (!post) {
        return <h1>Post Not Found</h1>;
    }
    return (
        <>
            <div>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <div>
                    <p>
                        {post.description}
                    </p>
                </div>
                <div>
                    <button>Delete</button>
                    <Link to={''}>
                        <button>Edit</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PostInfoPage;