import styled from "styled-components";

export const StyleWelcome = styled.section`
    background-color:white;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    p{  
        padding: .5rem;
        margin-top: 2rem;
        font-size: 2rem;
        font-weight: 600;
        background: linear-gradient(darkblue, magenta);
        color: white;
        border-radius: 0.5rem;
    }
    .image{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 60%;
        max-width: 600px;
        min-width: 300px;
    }
    .image img{
        background-size: cover;
        width: 100%;
    }
    .button{
        background-image: linear-gradient(to right, darkblue, magenta);
        width: 100px;
        padding: .5rem;
        text-align: center;
        color: white;
        font-size: 1.25rem;
        font-weight: 600;
        text-decoration: none;
        margin-bottom: 2rem;
        border-radius: 0.5rem;
    }

`