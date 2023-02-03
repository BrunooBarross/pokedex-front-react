import styled from 'styled-components'; 

const DivModal = styled.div`
    width: 100%;
    height: 100%;
    .modal-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    h5{
        font-size: 20px;
    }
    ion-icon{
        margin-top: 5px;
        font-size: 25px;
        cursor: pointer;
        color: red;
    }
    input{
        width: 100%;
        height: 40px;
        padding-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        border: solid #d0d0d0 1px;
        font-size: 16px;
        color: #868585;
        outline: none;
    }
    @media (max-width: 290px) {	
        input{
            font-size: 14px;
        }
    }
`
const BtnDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%; 
    button{
        width: 250px;
        height: 62px;
        margin-top: 10px;
        border-radius: 10px;
        cursor: pointer;
        color: #fff;
        font-size: 18px;
        border: solid #a55eea 2px;
    }
    .btn-submit{
        margin-right: 10px;
        background-color: #28A745;
    }
    .btn-close{
        background-color: #DC3545;
    }
    @media (max-width: 920px) {	
        button{
            width: 90px;
            justify-content: center;
            height: 40px;
            font-size: 14px;
            text-align: center;
        }  
    }
    @media (max-width: 529px) {	
        button{
            width: 75px;
            height: 40px;
            font-size: 14px;
            text-align: center;
        }  
    }
`

export {
    DivModal,
    BtnDiv
}