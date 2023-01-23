import React, { useState } from 'react';

function FormButton() {
    const [showForm, setShowForm] = useState(false);
  
    const handleClick = () => {
      setShowForm(true);
      window.open('enroll-form', '_blank');
    }
  
    return (
      <div>
        <button style={{width: '6.5rem', height: '1.9rem', borderRadius: '20px', marginRight: '10px', border: '2px solid red', marginLeft: '5px'}} onClick={handleClick}>Enroll Now</button>
        {showForm && <form action="enroll-form" target=""></form>}
      </div>
    );
  }
  
  export default FormButton;