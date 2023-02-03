import React, { useState } from 'react';

function FormButton() {
    const [showForm, setShowForm] = useState(false);
  
    const handleClick = () => {
      setShowForm(true);
      window.open('https://forms.gle/kHYC6wT26tRu9bF7A', '_self');
    }
  
    return (
      <div>
        <button style={{width: '6.5rem', height: '1.9rem', borderRadius: '12px', marginRight: '10px', borderTop: '2px solid red', borderBottom: '2px solid black', marginLeft: '5px'}} onClick={handleClick}>Enroll Now</button>
        {showForm && <form action="enroll-form" target=""></form>}
      </div>
    );
  }
  
  export default FormButton;