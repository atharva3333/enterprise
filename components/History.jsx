import React from 'react'
import Image from 'next/image'


const History = () => {
    return (
        <div className='bg-white w-full pt-20'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='sm:text-6xl text-5xl text-center font-bold my-20 uppercase'>Traditional <span className='text-purple'>technlogies</span> weren’t built for the way web runs today.
                </h1>
                
            </div>
            <Image className='mb-20 w-full' src='/images/tech.png' width={1240} height={237} />
            <hr />
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='sm:text-7xl text-5xl font-bold mt-20 uppercase'>We build headless</h1>
                <h1 className='sm:text-7xl text-5xl font-bold mt-3 mb-20 uppercase'>
                    <span className='text-purple stretch'> solutions</span> for all the niches
                </h1>
                
            </div>
            <hr />
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-20 w-full mx-auto justify-center pb-20 mb-20'>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium text-purple'>Healthcare</h3></div>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium'>Healthcare</h3></div>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium'>Healthcare</h3></div>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium'>Healthcare</h3></div>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium text-purple'>Healthcare</h3></div>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium'>Healthcare</h3></div>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium'>Healthcare</h3></div>
               <div className='h-48 w-72 border mx-auto shadow-[-5px_5px_0_0_rgba(0,0,0,1)] border-black'><Image src='/images/dotted-img.png' width='288' height='80'/><h3 className='m-auto font-medium'>Healthcare</h3></div>
               
            </div>

        </div>
    )
}

export default History