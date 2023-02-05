import styled from "styled-components"

const Container = styled.div`
    width: 85%;
    min-height: 180px;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #30126e;
`
const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #611459;

    span{
        position: absolute;
        left: 20px;
        font-size: 13px;
        color: #c9c0c0;
    }

    ion-icon{
        position: absolute;
        right: 20px;
        font-size: 15px;
        cursor: pointer;
    }

    ion-icon:hover{
        color: red;
    }
`

const Section = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`

const Notification = styled.div`
    margin-top: 45px;
    text-align: center;
    height: 100%;
    color: white;

    span{
        cursor: pointer;
        color: #0885fa;
    }
`

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    width: 80px;
    border-radius: 10px;
  
    :hover {
        color: #2503bb; 
        background-color: rgb(97,20,89);
    }
`

const Imagens = styled.img`
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 15px;
    cursor: pointer;
`

const Names = styled.h3`
    text-align: center;
    font-size: 70%;
    font-weight: 600;
    font-family: "Flexo-Demi",arial,sans-serif;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Type = styled.h4`
    display: flex;
    justify-content: flex-end;
    margin-top: 3px;
    margin-right: 10px;
    font-size: 10px;
    color: #fff;
`

export {
    Container,
    Section,
    Header,
    Notification,
    Cards,
    Imagens,
    Names,
    Type
} 
