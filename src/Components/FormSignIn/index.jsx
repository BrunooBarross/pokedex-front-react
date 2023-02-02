import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import imgSignIn from '../../assets/images/signin.png'

import {
    Container,
    FormData,
    Button,
    Div
} from "../FormSignUp/styled"

const FormSignIn = ({ data, setData, load, login }) => {
    return (
        <Container>
            <img src={`${imgSignIn}`} alt='Sign In' />
            <FormData load={load} onSubmit={login}>
                <input type="email" name="name" minLength="4" placeholder='email'
                    onChange={e => setData({ ...data, email: e.target.value })}
                    disabled={load ? true : false} required />
                <input type="password" minLength="4" name="password" placeholder='password'
                    title='A senha deve conter no mínimo 4 caracteres'
                    onChange={e => setData({ ...data, password: e.target.value })}
                    disabled={load ? true : false} required />
                <Button load={load} disabled={load ? true : false} type="submit">{load ? <ThreeDots color="#fff" height={13} /> : "Confirm"}</Button>
                <Div>
                    <Link to={`/`}>
                        <span>First time? Create an account!</span>
                    </Link>
                </Div>
            </FormData>
        </Container>
    );
}

export default FormSignIn;