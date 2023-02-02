import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import audio from "../../assets/audios/audio.mp3";
import FormSignUp from "../../Components/FormSignUp";
import { signUp } from '../../Services/userApi';
import { toast } from 'react-toastify';

import {
   Container,
   Audio
} from "./styled"

const SignUp = () => {
   const navigate = useNavigate();
   const [register, setRegister] = useState({ email: "", password: "", imageUrl: "" });
   const [load, setLoad] = useState(false);
   
   async function registerUser(event) {
      event.preventDefault();
      setLoad(true);

      try {
         await signUp(register);
         toast.success("Successfully registered");
         navigate('/signin');
      } catch (error) {
         if (error.response.status === 409) {
            toast.warning("E-mail already registered");
         }

         if (error.response.status === 422) {
            toast.error("Error! Check the data");
         }

         if (error.response.status === 404) {
            toast.error("System unavailable!");
         }
         setLoad(false);
      }
   }

   return (
      <Container>
         <Audio src={`${audio}`} autoPlay controls></Audio>
         <FormSignUp
            register={register}
            setRegister={setRegister}
            load={load}
            registerUser={registerUser}
         />
      </Container>
   );
}

export default SignUp;