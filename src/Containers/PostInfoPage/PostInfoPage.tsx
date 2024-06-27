import {Posts} from "../../types.ts";
import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import AxiosApi from "../../AxiosApi.tsx";

interface Props {
    getPostById: (id: string) => Posts | undefined;
    getUpdatedPosts: () => void;
}

const PostInfoPage: React.FC<Props> = ({getPostById, getUpdatedPosts}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const post = getPostById(id as string);
    if (!post) {
        return <h1>Post Not Found</h1>;
    }
    const getDelete = async () => {
        await AxiosApi.delete(`posts/${post.id}.json`);
        navigate('/')
        void getUpdatedPosts()
    }


    return (
        <>
            {post &&
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <div>
                        <p>
                            {post.description}
                        </p>
                    </div>
                    <div>
                        <button onClick={getDelete}>Delete</button>
                        <Link to={`/posts/${post.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
};

export default PostInfoPage;