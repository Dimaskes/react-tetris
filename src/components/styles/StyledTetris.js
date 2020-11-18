import styled from 'styled-components';

import bgImage from '../../img/bg.jpg';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: center;
    padding-top: 40px;
    margin: 0 auto;
    max-width: calc(100vw/2.5);

    aside{
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`