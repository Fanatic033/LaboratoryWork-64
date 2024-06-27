import './App.css'
import Header from "./Components/Header/Header.tsx";
import ContactsPage from "./Containers/ContactsPage/ContactsPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage.tsx";
import AboutPage from "./Containers/AboutPage/AboutPage.tsx";
import AddPostPage from "./Containers/AddPostPage/AddPostPage.tsx";
import {useState} from "react";
import {Posts} from "./types.ts";


const App = () => {
    const [posts, setPosts] = useState<Posts[]>([]);

    const handlePost = (newPost: Posts) => {
        setPosts([...posts, newPost]);
    }
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/new-post" element={<AddPostPage onAddPost={handlePost}/>}/>
                <Route path="*" element={<h1 className='text-center mt-5'>Not Found Page</h1>}/>
            </Routes>
        </>
    )
};

export default App
