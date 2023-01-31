import React from 'react';
import Navbar from '../../components/navbar/Navbar'



const EnrollForm = () => {
  return (
    <>
<div style={{backgroundColor: 'whitesmoke'}}className='form '>
    <Navbar />
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}className='enroll sm: flex align-center justify-center '>
   <div  style={{display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '2rem', width: '40rem', height: '45rem', borderLeft: '2px solid red', borderTop: '2px solid red', borderRight: '2px solid black', borderBottom: '2px solid black', borderRadius: '5px', alignItems: 'center', justifyContent: 'center'}} class='enroll bg-white '>
       <div className=' pt-1 md:ml-20 lg:ml-4  mt-1 items-center '>

                <p className='text-black lg:text-5xl sm:text-xl md:text-xl font-semibold text-center mt-4'>Bold * <span className='text-red-600'>Thinkers</span> * Doers</p>
       <h3 className='text-black sm:text-xl text-center  mt-8'>Join us for an Extensive Experience</h3>
 
       </div>

       <div id="fullName" class="grid flex-row text-center gap-4 m-4 p-4">
                  
                        <label  for="fname" class="text-sm text-black  lg:text-xl md:text-xl">First Name</label>
                        <input style={{borderBottom: '2px solid black', outline: 'none'}} type="text" name="" id="fname"
                            class=" bg-black lg:p-4 md:p-4 p-2 lg:text-xl md:text-xl rounded-md  text-black  text-sm bg-transparent  shadow-sm w-full "/>
                  
                        <label for="lname" class="text-sm text-black lg:text-xl md:text-xl">Last Name</label>
                        <input style={{borderBottom: '2px solid black', outline: 'none'}} type="text" name="" id="lname"
                            class=" bg-black rounded-md text-black border-slate-300 text-sm pl-2 bg-transparent outline-red-500 shadow-sm lg:p-4 md:p-4 p-2 lg:text-xl md:text-xl  w-full "/>

                    <label for="email" class="text-sm text-black lg:text-xl md:text-xl ">Email</label>
                <input style={{borderBottom: '2px solid black', outline: 'none'}} type="email" name="" id="email"
                    class=" bg-black  rounded-md  text-black  text-sm pl-2 bg-transparent  shadow-sm lg:p-4 md:p-4 p-2 lg:text-xl md:text-xl w-full " />
      
                  
          <label for="email" class="text-sm text-black lg:text-xl md:text-xl ">Phone Number</label>
            <input style={{borderBottom: '2px solid black', outline: 'none'}} type="phone" name="" id="phone"
              class=" bg-black rounded-md  text-black  text-sm pl-2 bg-transparent  shadow-sm lg:p-4 md:p-4 p-2 lg:text-xl md:text-xl w-full "/>
                </div>

               
           

                <button style={{ alignItems: 'center', justifyContent: 'center', borderTop: '3px solid black', borderBottom: '3px solid red'}}className="px-12 py-2 mt-4 flex text-center align-center  text-sm text-black-500 font-semibold rounded-full  hover:text-white hover:bg-gray-500 hover:border-transparent focus
                :outline-none lg:text-xl md:text-xl">Enroll</button>


              <h6 className='text-white text-center  '>Each Cohort has 20 student maximum</h6>

 
         </div> 
         
</div>
</div>
     </> 
  );
}


export default EnrollForm;



















