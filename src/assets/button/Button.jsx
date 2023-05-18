import React, { useState } from 'react';

function FormButton() {
    const [showForm, setShowForm] = useState(false);
  
    const handleClick = () => {
      setShowForm(true);
      window.open('https://forms.gle/kHYC6wT26tRu9bF7A', '_blank');
    }
  
    return (
      <div>
        <button className="text-center text-slate-900 w-36 h-10 rounded-[20px] mr-[10px] ml-[5px] bg-[red]  font-bold " 
        onClick={handleClick}>Enroll Now</button>
        {showForm && <form action="https://forms.gle/kHYC6wT26tRu9bF7A " target=""></form>}
      </div>
    );
  }
  
  export default FormButton;