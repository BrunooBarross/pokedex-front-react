import styled from "styled-components";

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgb(250,21,21);
    background: radial-gradient(circle, rgba(250,21,21,1) 0%, rgba(3,18,130,1) 100%);
`;

const Main = styled.div`
    margin-top: 10px;
    width: 900px;
    height: 100vh;
    background: rgb(230,229,231);
    background: linear-gradient(90deg, rgba(230,229,231,1) 0%, rgba(187,187,187,1) 56%);
    border-radius: 20px;

    @media (max-width: 990px) {	  
        width: 90%;
    }
`;

export {
    Container,
    Main
}