import {useState} from 'react'

function Input() {

 

// declarer un state (l'etat de la valeur de mon input et chaque fois que l'utilisateur tape ds l'input)
//setInputValue est une fonction qui permet de définir la valeur d'un élément d'entrée.
// déclarer un state : 
//1: importer le state du hook de react:

const [InputValue, setInputValue] = useState("");
console.log(InputValue);

  // creer un function pour ecouter
  // l'evenement "change"

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

return <input type="text" placeholder='task' value={InputValue} onChange={handleChange}/>;

}

export default Input;

// Nous avons déclarer un input etat initial
// déclarer poser un ecouteur d'event sur son change

// on veut faire en sorte que lorsque l'utilisateur submit, cela créer une liste
//avec pour valeur celle de l'input.



