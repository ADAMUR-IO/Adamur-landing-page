import React from 'react';
import './client-directory.styles.css';
import Component2 from '../../component/images/Component 2.png';
import Star from '../../component/images/star.png';

const Client = () => {
  return (

    <div className='directory  bg-black h-72 items-center'>
      <div className='md:cols-2 lg:cols-2 text-white text-center font-bold '>TESTIMONIAL FROM SATISFIED CLIENTS</div>
    <div className='directory-item-container flex md:cols-2 lg:cols-2 justify-between-2 justify-start gap-52 ml-5 bg-gradient-to-br Class
    Properties
    border-solid-1 
    mt-4 mb-6'>
      <div className='body flex md:cols-2 lg:cols-2 z-10'>
      <div className='body-2'>
      <div>
        <img className='background-image' src={Component2} alt="cohort" />
      </div>
      <div className='client-description'>
        <h2>Client 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
        <div>
                <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
                  <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
            
        </div>
        
        </div>
        </div>
         </div>

         <div className='body flex md:cols-2 lg:cols-2 z-10'>
        <div className='body-2'>
      <div>
        <img className='background-image' src={Component2} alt="cohort" />
      </div>
      <div className='client-description'>
        <h2>Client 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
        <div>
                <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                 <img src={Star} alt="star" />
                </div>
        </div>
      
        </div>
        </div>
        </div>

        <div className='body flex md:cols-2 lg:cols-2 z-10'>
        <div className='body-2'>
      <div>
        <img className='background-image' src={Component2} alt="cohort" />
      </div>
      <div className='client-description'>
        <h2>Client 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
        <div>
                            <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                          </div>
                          
        </div>
        
        </div>
        </div>


        
      </div>
      <div className='body flex md:cols-2 lg:cols-2 z-10'>
        <div className='body-2'>
      <div>
        <img className='background-image' src={Component2} alt="cohort" />
      </div>
      <div className='client-description'>
        <h2>Client 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
        <div>
                            <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                          </div>
                          
        </div>
        
        </div>
        </div>


        
      </div>
      <div className='body flex md:cols-2 lg:cols-2 z-10'>
        <div className='body-2'>
      <div>
        <img className='background-image' src={Component2} alt="cohort" />
      </div>
      <div className='client-description'>
        <h2>Client 5</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</p>
        <div>
                            <div className='star flex md:cols-2 lg:cols-2 justify-between-0'>
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                              <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                          </div>
                          
        </div>
        
        </div>
        </div>


        
      </div>
      
    </div>

    </div>


  );
}

export default Client;