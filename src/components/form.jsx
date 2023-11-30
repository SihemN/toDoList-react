import React, { useState } from 'react'
import Input from './Input'

export default function form() {
    //fonction qui va permettre de modifier le stateInitial
    //const state = useState (stateInitial)
    //pour recuperer le stateInitial:
    //stateInitial = state [0]
    const InputValue = useState(setInputValue);
    console.log(InputValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            title: InputValue,
            check: false,
        };
        console.log()
    }
  return (
    <form onSubmit={handleSubmit}>  
    <input type=" text" placeholder='task' value={useState} />
     
    </form>
  );
}
