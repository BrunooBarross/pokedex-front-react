import styled from "styled-components"

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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 970px;
    min-height: 100vh;
    background-color: white;
    border-radius: 20px;

    .btn {
        margin-top: 40px;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: 2px solid #e74c3c;
        border-radius: 0.6em;
        color: #e74c3c;
        cursor: pointer;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-self: center;
            -ms-flex-item-align: center;
                align-self: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1;
        padding: 1.2em 2.8em;
        text-decoration: none;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    .primary {
        border-color: #3498db;
        color: #fff;
        box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
        -webkit-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
    }

    .primary:hover {
        color: black;
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    }

    @media (max-width: 990px) {	  
        width: 90%;
    }
`;

const Label = styled.label`
    margin: 5px;
    text-align: center;
    margin-top: 200px;
    font-size: 20px;

    span{
        cursor: pointer;
        color: #0885fa;
    }

`

export {
    Container,
    Main,
    Label
}