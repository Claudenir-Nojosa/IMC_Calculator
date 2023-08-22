import React from 'react'

export default function CalcularIMC(props){
    const calc=()=>{
        props.setResultado(props.peso/(props.altura*props.altura))
    }
    return(
    <div>
        <button onClick={calc}>Calcular IMC</button>
    </div>
    )

}