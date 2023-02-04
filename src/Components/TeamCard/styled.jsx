import styled from "styled-components"

const Container = styled.div`
    width: 85%;
    height: 180px;
    border-radius: 20px;
    margin-top: 40px;
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

export {
    Container,
    Header,
    Notification
}