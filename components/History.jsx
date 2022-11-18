import React from 'react'
import Image from 'next/image'

const History = () => {
    return (
        <div className='bg-white w-full pt-20 '>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-5xl font-bold my-20 uppercase'>Traditional <span className='text-indigo'>technlogies</span> weren’t built for the way web runs today.
                </h1>
                <Image className='mb-20' src='/images/tech.png' width='1240' height='237' />
            </div>
            <hr />
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-5xl font-bold my-20 uppercase'>We build headless
                    solutions for all the niches
                </h1>
            </div>

            <div className='grid grid-cols-4 gap-20 max-w-[1240px] mx-auto'>
               <div className='h-20 w-20 border-black'>Healthcare</div>
               <div className='h-20 w-20 border-black'>Healthcare</div>
               <div className='h-20 w-20 border-black'>Healthcare</div>
               <div className='h-20 w-20 border-black'>Healthcare</div>
               <div className='h-20 w-20 border-black'>Healthcare</div>
               <div className='h-20 w-20 border-black'>Healthcare</div>
               <div className='h-20 w-20 border-black'>Healthcare</div>
               <div className='h-20 w-20 border-black'>Healthcare</div>
            </div>

        </div>
    )
}

export default History