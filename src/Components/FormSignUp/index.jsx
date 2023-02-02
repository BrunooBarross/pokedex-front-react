import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import imgSignUp from '../../assets/images/signup.png'

import {
    Container,
    FormData,
    Button,
    Div
} from "./styled"

const FormSignUp = ({ register, setRegister, load, registerUser }) => {
    return (
        <Container>
        <img src={`${imgSignUp}`} alt='Sign Up' />
        <FormData load={load} onSubmit={registerUser}>
            <input type="email" name="name" minLength="4" placeholder='username'
                onChange={e => setRegister({ ...register, email: e.target.value })}
                disabled={load ? true : false} required />
            <input type="password" minLength="4" name="password" placeholder='password'
                title='A senha deve conter no mínimo 4 caracteres'
                onChange={e => setRegister({ ...register, password: e.target.value })}
                disabled={load ? true : false} required />
            <input type="text" pattern="(http(s?):\/\/.*\.(?:png|jpg|jpeg))" name="imageUrl" placeholder='your beautiful picture'
                title='Link deve seguir o padão http, https, formatos jpg e png'
                onChange={e => setRegister({ ...register, imageUrl: e.target.value })}
                disabled={load ? true : false} required />
            <Button load={load} disabled={load ? true : false} type="submit">{load ? <ThreeDots color="#fff" height={13} /> : "Confirm"}</Button>
            <Div>
                <Link to={`/signin`}>
                    <span>Switch back to login</span>
                </Link>
            </Div>
        </FormData>
    </Container>
    );
}

export default FormSignUp;