import styled from "styled-components";

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: rgb(250,21,21);
    background: radial-gradient(circle, rgba(250,21,21,1) 0%, rgba(3,18,130,1) 100%);
`;

const Main = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    width: 970px;
    background-color: white;
    border-radius: 20px;

    @media (max-width: 990px) {	  
        width: 90%;
    }
`;

const CardsGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 10px 0 10px;
`;

const Search = styled.div`
    width: 970px;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    input{
        height: 40px;
        width: 130px;
        padding-left: 5px;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: white;
        background-image: url('searchicon.png');
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        -webkit-transition: width 0.4s ease-in-out;
        transition: width 0.4s ease-in-out;
    }

    input:focus {
        width: 40%;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    @media (max-width: 990px) {	  
        width: 90%;
    }
`;

export {
    Container,
    Main,
    CardsGrid,
    Search
}