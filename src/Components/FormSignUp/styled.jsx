import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 83%;
    max-height: 600px;
    background-color: #fff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.7);
    border-radius: 30px;

    img {
        margin-top: 75px;
        width: 200px;
    }

    @media (max-width: 450px) {	  
        width: 90%;
    }

    @media (max-width: 340px) {	  
        img {
            width: 170px;
        }
    }
`;

const FormData = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    
    input{
        width: 100%;
        height: 60px;
        padding-left: 10px;
        margin-top: 15px;
        background: #e0dbdb;
        border-radius: 10px;
        border: none;
        opacity:${props => props.load ? 0.5 : 1};
        font-family: 'Oswald';
        font-size: 18px;
        font-style: normal;
        color: #9F9F9F;
    }
`;

const Button = styled.button`
        opacity:${props => props.load ? 0.5 : 1};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 60px;
        justify-content: center;
        background: #278BB1;
        border-radius: 15px;
        border: none;
        font-family: 'Oswald';
        font-style: normal;
        font-size: 27px;
        color: #FFFFFF;
        cursor: pointer;
        margin-top: 25px;

        @media (max-width: 500px) {	  
            height: 55px;
        }
`

const Div = styled.div`
        width: 100%;
        margin-top: 14px;
        display: flex;
        justify-content: center;
    
    span{
        color: #184aca;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        cursor: pointer;
    }
    @media (max-width: 390px) {	  
        span{
            font-size: 17px;
            line-height: 20px;
        }
    }
`

export {
    Container,
    FormData,
    Button, 
    Div
}