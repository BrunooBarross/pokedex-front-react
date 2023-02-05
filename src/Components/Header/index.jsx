import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CreateTeamModal from "../CreateTeamModal";
import { useContext } from "react";
import StateContext from "../../Contexts/StateContext";
import pokedex from "../../assets/images/pokedex.png"

import logo from '../../assets/images/logo.svg'

import {
    Container,
    Ul,
    ImageUser,
    ChevronIcon,
    QuickAccess
} from "./styled"

const Header = () => {
    const navigate = useNavigate();
    const { token, imageUrl } = JSON.parse(localStorage.getItem('userData'));
    const { handlerModalTeam, setHandlerModalTeam, setHandlerListTeam } = useContext(StateContext);
    const [quickAccess, setQuickAccess] = useState(false);

    function logout() {
        localStorage.removeItem("userData");
        navigate("/signin");
    }

    const navigateHome = () => {
        setHandlerListTeam(false);
        setHandlerModalTeam(false);
        navigate('/home');
    }

    const navigateTeams = () => {
        setHandlerModalTeam(false);
        setHandlerListTeam(false);
        navigate('/teams');
    }

    return (
        <Container>
            <CreateTeamModal handlerModalTeam={handlerModalTeam} setHandlerModalTeam={setHandlerModalTeam}></CreateTeamModal>
            <div className='div-logo' onClick={() => { navigate('/home') }}>
                <img src={`${logo}`} alt="logo" />
                <span className='logo'>Pokédex</span>
            </div>
            <Ul>
                <li onClick={() => { navigateHome() }}><img className="dex-logo" src={`${pokedex}`} alt="pokedex" />
                    POKEMONS
                </li>
                <li onClick={() => { navigateTeams() }}><ion-icon name="document-outline"></ion-icon>
                    TEAMS
                </li>
            </Ul>
            <ImageUser
                src={imageUrl}
                alt="profile picture"
                onClick={() => setQuickAccess(!quickAccess)}
            />
            <ChevronIcon
                transfrom={quickAccess ? "rotate(180deg)" : "rotate(0deg)"}
                onClick={() => setQuickAccess(!quickAccess)}
                size="30px"
            />
            <QuickAccess to="#" token={token} display={quickAccess ? "inherit" : "none"}>
                <span onClick={() => logout()}>Logout</span>
            </QuickAccess>
        </Container>
    );
}

export default Header;