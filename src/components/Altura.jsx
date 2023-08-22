import React from 'react'

export default function Altura(props){
    return(
        <div>
            <label>
            Altura
            <input type="text" value={props.altura} onChange={(e)=>{props.setAltura(e.target.value)}}></input>
            </label>
        </div>
    )
}