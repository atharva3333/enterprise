import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
        <div className=' flex max-w-[1240px] mx-auto'>
        <div className='ml-6 sm:basis-4/6 basis-auto'>
        <h1 className='text-white sm:text-7xl text-5xl mt-16 font-bold'>WE BUILD & MIGRATE
                TO <span className='text-yellow'>FASTER </span> WEB </h1>
            <p className='text-white sm:text-2xl text-1xl mt-12'>Website development has shifted to NextJS and headless CMS CMS for providing faster, secure, scalable and SEO optimized web.
            </p>
            <div className='flex'>
            <button className='bg-yellow rounded-full p-4 mt-12 px-10 shadow-[0_8px_0_0_rgba(255,255,255,1)] font-medium'>Get a Quote</button>
            <div className='absolute right-20 lg:block hidden'><Image src='/images/scroll.png' height='153' width='153'/></div>
            </div>
        </div>
        
        </div>
        <div className='max-w-[1100px] mx-auto mt-24'>
         <Image className=' w-full' src='/images/main-img.png' width='1043' height='444'/>
        </div>
        </div>
    )
}

export default Hero