import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { StyleForm } from "./style";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Form = () =>{
    const [status, setStatus] = useState(false)
    const [user, setUser] = useState('')
    let history = useHistory()


    useEffect(()=>{
        if(status === true){
            history.push(`welcome/${user}`)
        }
    }, [history, user, status])

    const schema = 
        yup.object().shape({
            name: yup
                .string()
                .required("Nome é obrigatório!"),
            email: yup
                .string()
                .required("E-mail é obrigatório!"),
            password: yup
                .string()
                .required("Senha é obrigatória!")
                .matches(/^[0-9a-zA-Z$*&@#]{8,}$/, "mínimo 8 caracteres")
                .matches(/^(?=.*[a-z])/, "letra minúscula")
                .matches(/^(?=.*[A-Z])/, "letra maiúscula")
                .matches(/^(?=.*[$*&@#])/, "caracter especial $*&@#"),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password'), null], 'Confirme o password!')

        })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
      });
    
    const onSubmit = data => {
        setUser(data.name)
        setStatus(true)
    }

    return(
        <StyleForm onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome" {...register("name")}/>
                {errors.name &&(
                    <span className="error">{errors.name.message}</span>
                    )
                }
            <input type="email" placeholder="E-mail" {...register("email")}/>
                {errors.email &&(
                    <span className="error">{errors.email.message}</span>
                    )
                }
            <input type="password" placeholder="Senha" {...register("password")}/>
                {errors.password &&(
                    <span className="error">{errors.password.message}</span>
                    )
                }
            <input type="password" placeholder="Confirmar senha" {...register("confirmPassword")}/>
                {errors.confirmPassword &&(
                    <span className="error">{errors.confirmPassword.message}</span>
                    )
                }
            <button type="submit">Login</button>
        </StyleForm>
    )

}
