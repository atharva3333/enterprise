import React from 'react'
import Image from 'next/image'
const Testimonials = () => {
  return (
    <div className='bg-white w-full'>
        <div className='grid sm:grid-cols-6 grid-cols-2 py-20'>

        <div className='sm:my-0 my-10'><Image className='mx-auto' src='/images/meta.png' width='88' height='35' /></div>
        <div className='sm:my-0 my-10'><Image className='mx-auto' src='/images/netflix.png' width='78' height='24' /></div>
        <div className='sm:my-0 my-10'><Image className='mx-auto' src='/images/airbnb.png' width='79' height='24' /></div>
        <div className='sm:my-0 my-10'><Image className='mx-auto' src='/images/IBM.png' width='80' height='20' /></div>
        <div className='sm:my-0 my-10'><Image className='mx-auto' src='/images/slack.png' width='95' height='24' /></div>
        <div className='sm:my-0 my-10'><Image className='mx-auto' src='/images/google.png' width='90' height='24' /></div>
       
        </div>
    </div>
  )
}

export default Testimonials