import styled from "styled-components"


export const StyleForm = styled.form`
    width: 250px;
    padding: 3rem;
    background-color: rgba(255,255,255,0.75) ;
    box-shadow: inset 3px 3px 7px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    border-radius: 1rem;
    min-width: 200px;

    input{
        background-color: rgba(255,255,255,0);
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-bottom: 1px solid rgba(255,255,255,0.75);
    }
    button{
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;
        background-image: linear-gradient(to right, darkblue, purple, deeppink);
        color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
    }
    .error{
        font-size: .75rem;
        font-weight: 400;
        color: #A30404;
    }

`