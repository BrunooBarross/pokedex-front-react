import styled from "styled-components";

const Title = styled.h1`
    margin-top: 30px;
    font-size: 200%;
    text-align: center;

    span{
        color: #616161;
    }
`;

const Section = styled.section`
    margin-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .divChart{
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        height: 350px;
        background-color: #fff;
        margin-bottom: 10px;
    }
   
    @media (max-width: 888px) {	  
        justify-content: center;
    }
`

const Div = styled.div`
    position: relative;
    width: 417px;
    height: 417px;
    background-color: #f2f2f2;
    margin: 0 0 0 20px;
    border-radius: 30px;
    margin-right: 20px;

    img{
        width: 100%;
        height: 100%;
    }

    ion-icon {
        filter: drop-shadow(2px 1px 3px #be1414);
        cursor: pointer;
        font-size: 40px;
        color: #30a7d7;
    }

    ion-icon:hover {
        color: red; 
    }

    .caret-forward-circle{
        position: absolute;
        top: 50%;
        right: 10px;
    }

    @media (max-width: 986px) {	  
        width: 380px;
        height: 380px;
    }

    @media (max-width: 507px) {	  
        width: 90%;
    }
`

const CaretBack = styled.div`
        position: absolute;
        top: 50%;
        left: 10px;
        display: ${props => props.number === 1 ? "none" : "inline"};
`

const SectionRight = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    
    button {
        width: 170px;
        box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.2);
        background-color: #008CBA; /* Green */
        border: none;
        border-radius: 10px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 20px;
        cursor: pointer;
    }

    button:hover{
        background-color: red; 
    }

    .type{
        color: #212121;
        margin-top: 10px;
        font-size: 125%;
    }

    @media (max-width: 877px) {	  
        width: 90%;
    }
`;

const TableInfo = styled.div`
    display: flex;
    width: 429px;
    height: 243px;
    background-color: #30a7d7;
    border-radius: 15px;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.2);

    .column{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-left: 20px;

        ion-icon{
            font-size: 25px;
            font-weight: bold;
        }
    }

    h3{
        font-size: 18px;
        margin-top: 15px;
        color: #fff;
    }

    h4{
        font-size: 18px;
        margin-top: 15px;
    }

    @media (max-width: 986px) {	  
        width: 380px;
        height: 230px;
    }

    @media (max-width: 463px) {	  
        width: 90%;
    }
`

const Type = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
    width: 80%;
    background-color: #f2f2f2;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-left: 30px;

    h3{
        font-size: 20px;
    }

`

export {
    Title,
    Section,
    Div,
    CaretBack,
    TableInfo,
    SectionRight,
    Type
}