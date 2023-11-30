import React from 'react';
import { useState } from 'react';
import Input from './components/Input';
import inputValue from './components/Input';
import handleChange from './components/Input';
import form from './components/form';

function Todolist() {
  return(
    
    <Input value={inputValue} onChange={handleChange} />
      
    );
}
  

export default Todolist;
