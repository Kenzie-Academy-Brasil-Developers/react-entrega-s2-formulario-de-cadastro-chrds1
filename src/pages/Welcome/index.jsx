import React from "react"
import { StyleWelcome } from "./style"
import { Link, useParams } from "react-router-dom"

export const Welcome = ({image})=>{    
    let {user} = useParams()
    
return(
    <StyleWelcome>
        <p>Bem-vindo, {user}!</p>
        <section className="image">
            <img src={image} alt="Welcome"></img>
            <Link className="button" to="/">Voltar</Link>
        </section>
    </StyleWelcome>
)

}