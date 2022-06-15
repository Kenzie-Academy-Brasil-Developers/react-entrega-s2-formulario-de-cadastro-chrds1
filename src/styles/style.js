import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    div{
        background-image: url(${props=> props.background});
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

` 