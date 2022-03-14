import React from 'react'
import { useState } from 'react'
import star from './IMAGES/icon-star.svg'



const Social = () => {
  return (
  <div>
       <div className='flexus'>
          <div className='header'>
             <h1 >10,000+ of our users love our products</h1>

             <p className='para'> We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
            </div>

          <div className='contain'>
                <div className='imaga'>
                   <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" /> 
                    <p className='pa'>Rated 5 Stars in Review</p>     
               </div>
              

              < div className='imgs'>
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={star} alt="" />  
                 <p className='pa'>Rated 5 Stars in Repost Guru </p> 
               </div>


               <div className='imgg'>
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={star} alt="" />
                 <img src={star} alt="" />  
                 <p className='pa'>Rated 5 Stars in BestTech </p>     
              </div>
            
             

            </div>
       </div>
  </div>
    
    
  )
}

export default Social