import React , {useState} from 'react'
import Image from 'next/image'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
const Navbar = () => { 

    const [nav,setNav] = useState(false);

    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div>
        <div className='flex max-w-[1240px] mx-auto justify-between items-center p-4 text-white'>
        <div className='flex'>
        <Image src='/images/brand.png' width='36' height='35' alt='brand'/>
            <h1 className='text-yellow text-3xl mx-4'>enterprise</h1>
        </div>
            
            <ul className='hidden sm:flex text-white'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Solutions</li>
                <li className='p-4'>Technology</li>
                <li className='p-4'>Usecase</li>
                <li className='p-4'>Pricing</li>
                <li className='p-4'>Contact</li>
            </ul>
            {/* mobile */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {
                    nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>
                }
            </div>
            {/* mobile menu */}

            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen ease-in duration-300 bg-black z-20 ' 
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen ease-in duration-300 bg-black z-20'}>
                <ul>
                <li className='p-4 text-xl hover:text-gray-500'>Home</li>
                <li className='p-4 text-xl hover:text-gray-500'>Solutions</li>
                <li className='p-4 text-xl hover:text-gray-500'>Technology</li>
                <li className='p-4 text-xl hover:text-gray-500'>Usecase</li>
                <li className='p-4 text-xl hover:text-gray-500'>Pricing</li>
                <li className='p-4 text-xl hover:text-gray-500'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar