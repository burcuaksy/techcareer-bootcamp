import React, { useState, useEffect } from 'react'

import PropTypes from "prop-types";

function User() {
   const [name, setName] = useState('Faik');
   const [surname, setSurname] = useState('Turan');
   
   useEffect(() => {
    console.log('Component mounted or updated')
   });

   useEffect(() => {
    console.log('Component mounted')
   }, []);

   useEffect(() => {
    console.log('Component mounted')
   }, [name, surname]);

   const changeName = () => {
    setName('Ahmet');
   };

  return (
    <div>
    <h2>{name}</h2>
    <input type="button" value="Click" onClick={changeName}></input>
    </div>
  );
}

// const showMessage = () =>{
//   alert("Merhaba")
// }

User.propTypes = {
  name :  PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  //showMessage: PropTypes.func,
};

export default User;

