import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'


const WhatsAppButton = () => {
    
    const handleClick = () => {
        const encodedMessage = encodeURIComponent('Thank you for reaching out to ADAMUR, How may we assist you?');
        const waUrl = `https://wa.me/${254794658105}?text=${encodedMessage}`;
        window.open(waUrl);
    };
  return (
    <>
    <div>
        <div>

        </div>
        
    <button onClick={handleClick}className='bg-green-600 py-2 px-4 rounded w-56 h-12 flex'><FaWhatsapp size={30} class='ml-2 text-white '/><h2 className=' text-center text-sm md:text-lg lg:text-lg ml-2 text-white '>Whatsapp Us</h2></button>
      </div>
    </>
  )
}

export default WhatsAppButton
