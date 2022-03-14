import React from 'react'
import colton from './IMAGES/image-colton.jpg'
import irene from './IMAGES/image-irene.jpg'
import anne from './IMAGES/image-anne.jpg'

const Colton = () => {
  return (
    <div className='all'>

        <div className='coldiv'>
            <div className='col'> 
              <img className='colton' src={colton} alt="" />
             
               <div className='coly'>
                  <h5>Colton Smith</h5>
                  <p className='buyer'>Verified Buyer</p>
                </div>  
            </div>
            <p className='coltest'>
                "We needed the name printed design as the one we had ordered a week prior. Not only dis they find the original order, but we also received it in time.Excellent!"
            </p>
        </div>



      <div className='irenediv'> 

          <div className='irene'>
              <img className='iry' src={irene} alt="" />
              <div className='ire'>
                 <h5>Irene Roberts</h5>
                 <p className='buyer'>Verified Buyer</p>
              </div>
           </div>
             <p className='irenetest'> "Customer service is always excellent completely and very quick turn around completely delighted with the simplicity of the purchase and the speed of delivery"</p>

        </div>

        <div className='anndiv'>
          <div className='ann'>
              <img className='anny' src={anne} alt="" />
             <div className='any'>
                 <h5>Anne Wallace</h5>
                 <p className='buyer'>Verified Buyer</p>
              </div>
           </div>
            <p className='anntest'>
              "Put on order with this company and can only praise them for the very high standard. Will Defintely use them again and recommend them to everyone " 
            </p>
        </div>

      
      
    </div>
  )
}

export default Colton