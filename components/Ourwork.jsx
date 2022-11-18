import React from 'react'
import Image from 'next/image'

const Ourwork = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <h1 className='text-yellow my-12 text-3xl' >What do we do exactly?</h1>
            <div className='flex'>
                <div className='basis-4/5'>
                    <h1 className='text-white sm:text-6xl text-5xl font-bold'>INNOVATIVE <span className='text-yellow'>PRODUCTS</span> TO DELIVER ENGAGING EXPERIENCES TO SCALE.</h1>
                </div>
            </div>

            <div className='mt-20 overflow-auto whitespace-nowrap'>
                <div className=' whitespace-normal inline-block mx-4  border-2 border-white h-[487px] w-[515px] rounded-lg'>
                    <Image className='mx-auto' src='/images/illus-1.png' width='146' height='183' />
                    <h1 className='text-yellow text-3xl mx-auto font-bold mt-4'>Headless wordPress development</h1>
                    <p className='text-white mx-auto mt-4'>Native mobile apps are developed for specific mobile OS such as iOS or Android and users can access them from dedicated app stores.

                    </p>
                </div>
                <div className= ' whitespace-normal inline-block mx-4  border-2 border-white h-[487px] w-[515px] rounded-lg'>
                    <Image className='mx-auto' src='/images/illus-1.png' width='146' height='183' />
                    <h1 className='text-yellow text-3xl mx-auto font-bold mt-4'>Headless wordPress development</h1>
                    <p className='text-white mx-auto mt-4'>Native mobile apps are developed for specific mobile OS such as iOS or Android and users can access them from dedicated app stores.

                    </p>
                </div>
                <div className='  whitespace-normal inline-block mx-4 border-2 border-white h-[487px] w-[515px] rounded-lg'>
                    <Image className='mx-auto' src='/images/illus-1.png' width='146' height='183' />
                    <h1 className='text-yellow text-3xl mx-auto font-bold mt-4'>Headless wordPress development</h1>
                    <p className='text-white mx-auto mt-4'>Native mobile apps are developed for specific mobile OS such as iOS or Android and users can access them from dedicated app stores.

                    </p>
                </div>
            </div>

        </div>
    )
}

export default Ourwork