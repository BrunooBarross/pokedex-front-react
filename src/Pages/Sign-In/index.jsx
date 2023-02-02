import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FormSignIn from "../../Components/FormSignIn";
import audio from "../../assets/audios/audio.mp3";
import { toast } from 'react-toastify';
import { signIn } from '../../Services/userApi';

import {
    Container,
    Audio
} from "../Sign-Up/styled"

const SignIn = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const [load, setLoad] = useState(false);

    async function login(event) {
        event.preventDefault();
        try {
            setLoad(true);
            const response = await signIn(data.email, data.password);
            localStorage.setItem("userData", JSON.stringify({ token: response.token, userEmail: response.userName }));
            toast.success("Login Success");
            navigate('/home');
        } catch (error) {
            if (error.response.status === 404) {
                toast.error("System unavailable!");
            }
            if (error.response.status === 422 || error.response.status === 401) {
                toast.warning("Error! Check the data");
            }
            setLoad(false);
        }
    }
    return (
        <Container>
            <Audio src={`${audio}`} autoPlay controls></Audio>
            <FormSignIn
                data={data}
                setData={setData}
                load={load}
                login={login}
            />
        </Container>
    );
}

export default SignIn;