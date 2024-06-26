import './App.css'
import Header from "./Components/Header/Header.tsx";
import ContactsPage from "./Containers/ContactsPage/ContactsPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage.tsx";
import AboutPage from "./Containers/AboutPage/AboutPage.tsx";
import MutatePage from "./Containers/MutatePage/MutatePage.tsx";
import {useCallback, useEffect, useState} from "react";
import { Posts, PostsList} from "./types.ts";
import AxiosApi from "./AxiosApi.tsx";
import PostInfoPage from './Containers/PostInfoPage/PostInfoPage.tsx';
import Spinner from "./Components/Spinner/Spinner.tsx";


const App = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handlePost = (newPost: Posts) => {
        setPosts([...posts, newPost]);
    }
    const getAxiosPost = useCallback(async () => {
        try {
            const response = await AxiosApi.get<PostsList | null>('/posts.json')
            const data = response.data
            if (data !== null) {
                const postList: Posts[] = Object.keys(data).map((id) => ({
                    ...data[id],
                    id: id
                }));
                setPosts(postList)
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        void getAxiosPost()
    }, []);

    const getPostById = (id: string): Posts | undefined => {
        return posts.find(post => post.id === id);
    }

    if (loading) {
        return (<div className="d-flex justify-content-center align-items-center" style={{height: '310px'}}>
            <Spinner/>
        </div>)
    }
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage posts={posts}/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/new-post" element={<MutatePage onAddPost={handlePost} getUpdatedPosts={getAxiosPost}/>}/>
                <Route path="/posts/:id/edit"
                       element={<MutatePage onAddPost={handlePost} getUpdatedPosts={getAxiosPost}/>}/>
                <Route path={'/posts/:id'}
                       element={<PostInfoPage getPostById={getPostById} getUpdatedPosts={getAxiosPost}/>}/>
                <Route path="*" element={<h1 className='text-center mt-5'>Not Found Page</h1>}/>
            </Routes>
        </>
    )
};

export default App
