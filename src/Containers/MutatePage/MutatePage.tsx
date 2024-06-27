import React, { ChangeEvent, useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosApi from "../../AxiosApi.tsx";
import { Posts, PostsMutation } from "../../types.ts";
import Spinner from "../../Components/Spinner/Spinner.tsx";

interface Props {
    onAddPost: (newPost: Posts) => void;
}

const MutatePage: React.FC<Props> = ({ onAddPost }) => {
    const [form, setForm] = useState<PostsMutation>({
        id: '1',
        title: '',
        description: '',
        date: new Date().toLocaleString()
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const onFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const fetchOnePost = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await AxiosApi.get<Posts>(`/posts/${id}.json`);
            if (response.data) {
                setForm(response.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
          void fetchOnePost();
        }
    }, [fetchOnePost, id]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await AxiosApi.post('/posts.json', form);
            onAddPost(form);
            navigate('/');
        } catch (error) {
            console.error( error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container'>
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '310px' }}>
                    <Spinner />
                </div>
            ) : (
                <form onSubmit={onSubmit}>
                    <h2 className='text-center mt-5'>{id ? 'Edit Post' : 'Add new post'}</h2>
                    <div className='input-group'>
                        <input
                            type='text'
                            name='title'
                            placeholder='Enter Title'
                            className='w-100 mt-5'
                            value={form.title}
                            onChange={onFieldChange}
                        />
                        <textarea
                            name='description'
                            placeholder='Enter Description'
                            className='w-100 mt-5'
                            value={form.description}
                            onChange={onFieldChange}
                        />
                        <button className='btn btn-primary mt-3' type='submit'>Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default MutatePage;
