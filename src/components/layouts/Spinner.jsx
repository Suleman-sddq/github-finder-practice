import Spinner from './assets/Spinner.svg'
import React from 'react'

function Loading() {
   return (
     <div className='w-100 mt-20'>
         <img w={180}
            className='text-center mx-auto' src={Spinner}
            alt='Loading...'
         />
     </div>     
  )
}

export default Loading