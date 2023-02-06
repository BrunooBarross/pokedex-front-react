import styled from "styled-components"

const Section = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 100vh;

    h1{
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 14px;
        text-align: center;
    }

    .close-icon{
        position: absolute;
        right: 10px;
        font-size: 23px;
        cursor: pointer;
    }

    .close-icon:hover{
       color: red;
    }

    @media (max-width: 900px) {	  
        width: 90%;
    }
   
`

const Div = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 100%;
   
    @media (max-width: 570px) {	  
        width: 400px;
    }

    @media (max-width: 420px) {	  
        width: 330px;
    }
   
   
`

const DivItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 30px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #611459;
    opacity: ${props => props.length > 5 ? 0.4 : props.hasSpecie ? 0.4 : 1};

    span{
        position: absolute;
        right: 20px;
        font-size: 13px;
        color: #c9c0c0;
    }

    :hover{
        cursor: ${props => props.length > 5 ? "n-resize" : "pointer"};
        background-color: ${props => props.length > 6 ? "none" : props.hasSpecie ? "none" : "red" };
    }
`


const NoTeam = styled.form`
    text-align: center;
    margin-top: 60px;
    span{
        cursor: pointer;
        color: blue;
    }

    span:hover{
        color: #0099ff;
    }
`

export {
    Section,
    Div,
    DivItem,
    NoTeam
}