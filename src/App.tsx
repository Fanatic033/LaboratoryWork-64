import './App.css'
import Header from "./Components/Header/Header.tsx";
import ContactsPage from "./Containers/ContactsPage/ContactsPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage.tsx";
import AboutPage from "./Containers/AboutPage/AboutPage.tsx";
import AddPostPage from "./Containers/AddPostPage/AddPostPage.tsx";
import {useEffect, useState} from "react";
import {Posts, PostsList} from "./types.ts";
import AxiosApi from "./AxiosApi.tsx";


const App = () => {
    const [posts, setPosts] = useState<Posts[]>([]);

    const handlePost = (newPost: Posts) => {
        setPosts([...posts, newPost]);
    }
    const getAxiosPost = async () => {
        try {
            const response = await AxiosApi.get<PostsList | null>('/posts.json')
            const data = response.data
            if (data !== null) {
                const postList: Posts[] = Object.keys(data).map((key) => ({
                    ...data[key],
                    id: key
                }));
                setPosts(postList)
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        void getAxiosPost()
    }, []);
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage posts={posts}/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/new-post" element={<AddPostPage onAddPost={handlePost}/>}/>
                <Route path="*" element={<h1 className='text-center mt-5'>Not Found Page</h1>}/>
            </Routes>
        </>
    )
};

export default App
