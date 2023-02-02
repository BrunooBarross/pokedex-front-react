import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {  ToastContainer }  from  'react-toastify';
import SignUp from "./Pages/Sign-Up";
import SignIn from "./Pages/Sign-In";
import Home from "./Pages/Home";

import  'react-toastify/dist/ReactToastify.css' ;

export default function App() {
    return (
        <>
            < ToastContainer  />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}