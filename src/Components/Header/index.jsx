import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
    const [quickAccess, setQuickAccess] = useState(false);

    function logout() {
        localStorage.removeItem("userData")
        navigate("/signin")
    }

    return (
        <Container>
            <div className='div-logo' onClick={() => { navigate('/home') }}>
                <img src={`${logo}`} alt="logo" />
                <span className='logo'>Pokédex</span>
            </div>
            <Ul>
                <li onClick={() => { navigate('/home') }}><ion-icon name="home-outline"></ion-icon>
                    HOME
                </li>
                <li onClick={() => { navigate('/teams') }}><ion-icon name="document-outline"></ion-icon>
                    TEAMS
                </li>
                <li>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    ADD
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