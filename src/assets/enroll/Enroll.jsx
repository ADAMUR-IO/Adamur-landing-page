import React from 'react'
import Elogo from '../images/elogo.png'



function Enroll() {
  return (
   <div class='enroll bg-black'>
       <div className=' pt-1 md:ml-20 lg:ml-20  mt-1 '>
                <img src= { Elogo } alt="" className='elogo w-44 mt-1' />

                <p className='text-white text-5xl font-semibold text-center mt-4'>Bold * <span className='text-red-600'>Thinkers</span> * Doers</p>
       <h3 className='text-white text-center  mt-8'>Join us for an Extensive Experience</h3>
 
       </div>

       <div id="fullName" class="flex flex-row">
                  
                    <div id="firstName" class="w-1/2 mr-1 text-black">
                        <label for="fname" class="text-sm">First Name</label>
                        <input type="text" name="" id="fname"
                            class=" bg-white h-16 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-red-500 shadow-sm"/>
                    </div>
                  
                    <div id="lastName" class="w-1/2 mr-1 text-black">
                        <label for="lname" class="text-sm">Last Name</label>
                        <input type="text" name="" id="lname"
                            class=" bg-white h-16 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-red-500 shadow-sm"/>
                    </div>
                </div>

               
                <label for="email" class="text-sm">Email</label>
                <input type="email" name="" id="email"
                    class=" bg-white h-16 w-full rounded-md border text-black border-slate-300 text-sm pl-2 bg-transparent outline-red-500 shadow-sm"/>
      
                  
          <label for="email" class="text-sm">Phone Number</label>
            <input type="phone" name="" id="phone"
              class=" bg-white h-16 w-full rounded-md border text-black border-slate-300 text-sm pl-2 bg-transparent outline-red-500 shadow-sm"/>

                <button className="px-12 py-2 mt-4 flex align-center  text-sm text-red-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-500 hover:border-transparent focus
                :outline-none focus:ring-2  focus:ring-red-500 focus:ring-offset-2">Enroll</button>


              <h6 className='text-white text-center  '>Each Cohort has 20 student maximum</h6>

 
         </div>
 
     
  

    

  
      
  )
}

export default Enroll