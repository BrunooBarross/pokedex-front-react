import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Sign-Up";
import  {  ToastContainer }  from  'react-toastify';
import  'react-toastify/dist/ReactToastify.css' ;

export default function App() {
    return (
        <>
            < ToastContainer  />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}