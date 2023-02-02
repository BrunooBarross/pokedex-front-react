import styled from 'styled-components';
import img from '../../assets/images/back-principal.jpg'

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

const Audio = styled.audio`
    position: absolute;
    top: 0;
    left: 0;
`

export{
    Container,
    Audio
}