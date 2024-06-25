import './App.css'
import Header from "./Components/Header/Header.tsx";
import ContactsPage from "./Containers/ContactsPage/ContactsPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage.tsx";

const App = () => {

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Contacts" element={<ContactsPage />} />
            <Route path="*" element={<h1 className='text-center mt-5'>Not Found Page</h1>} />
        </Routes>
    </>
  )
};

export default App
