import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import SignUp from "./Pages/Sign-Up";
import SignIn from "./Pages/Sign-In";
import Home from "./Pages/Home";
import Pokemon from "./Pages/Pokemon";
import Teams from "./Pages/Teams";
import StateContext from "./Contexts/StateContext";
import { useState } from "react";

import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    const [reloadPage, setReloadPage] = useState(false);
    const [handlerModalTeam, setHandlerModalTeam] = useState(false);
    const [handlerListTeam, setHandlerListTeam] = useState(false);

    return (
        <StateContext.Provider value={{reloadPage, setReloadPage, handlerModalTeam, setHandlerModalTeam, handlerListTeam, setHandlerListTeam}}>
            < ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/:idPokemon/info" element={<Pokemon />} />
                    <Route path="/teams" element={<Teams />} />
                </Routes>
            </BrowserRouter>
        </StateContext.Provider>
    );
}