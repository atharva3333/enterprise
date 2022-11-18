import React from 'react'
import Image from 'next/image'
const Testimonials = () => {
  return (
    <div className='bg-white w-full'>
        <div className='mb-12 p-12 flex flex-col md:flex-row mx-auto'>
          <Image className='mx-auto' src='/images/meta.png' width='88' height='35' />
          <Image className='mx-auto' src='/images/netflix.png' width='78' height='24' />
          <Image className='mx-auto' src='/images/airbnb.png' width='79' height='24' />
          <Image className='mx-auto' src='/images/IBM.png' width='80' height='20' />
          <Image className='mx-auto' src='/images/slack.png' width='95' height='24' />
          <Image className='mx-auto' src='/images/google.png' width='90' height='24' />
            
            
           
            
            
           
        </div>
    </div>
  )
}

export default Testimonials