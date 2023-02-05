import styled from "styled-components";

const Card = styled.div`
    position: relative;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px;
    width: 200px;
    height: 269px;
    border-radius: 10px;

    ion-icon{
        position: absolute;
        top: 3px;
        right: 10px;
        font-size: 25px;
        color: #2503bb;
        cursor: pointer;
    }

    ion-icon:hover{
        color: red;
    }

    :hover {
        color: #2503bb; 
        background-color: rgba(0,0,0,0.2);
    }
`

const Imagem = styled.img`
    background-color: #f2f2f2;
    border-radius: 15px;
    width: 95%;
    margin-left: 5px;
    cursor: pointer;
`

const Name = styled.h3`
    text-align: center;
    font-size: 110%;
    font-weight: 600;
    margin-bottom: 5px;
    font-family: "Flexo-Demi",arial,sans-serif;
    color: #313131;
    margin-top: 15px;
`

const Types = styled.h4`
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    margin-right: 10px;
    font-size: 14px;
`

export {
    Card,
    Imagem,
    Name,
    Types
} 