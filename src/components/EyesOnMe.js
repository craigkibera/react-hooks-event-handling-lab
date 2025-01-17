import React from 'react';
// Code EyesOnMe Component Here



function EyesOnMe() {
    const handleFocus = () =>{
        console.log('Good!');
    }
    const handleBlur = () =>{
        console.log('Hey!Eyes on me!');
    }
  return (
    <div>
      <button onFocus = {handleFocus} onBlur = {handleBlur}>

      </button>
    </div>
  )
}

export default EyesOnMe

