
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '../public/images'

export default function Navbar() {
   return (
      <nav className='
      bg-white
      w-full 
      rounded-b-[15px] 
      flex 
      items-center 
      fixed 
      h-[79px] 
      z-10
      '>
         <div className='
         w-full 
         max-w-screen-lg 
         m-auto  
         flex 
         justify-between 
         items-center
         px-2'>
            <Link href='/'>
            <Image
               src={logo}// Desired size with correct aspect ratio
               width={143}
               height={55} // Desired size with correct aspect ratio
               objectFit="fit"
               alt="Your Name"
            />
            </Link>
            
            <a href="#" className='
          rounded-full 
          bg-primary 
          w-48 h-8 
          flex
          justify-center 
          items-center 
          text-white
          font-bold
          font-primary
          hover:opacity-90'
            >Free Download</a>

         </div>

      </nav>
   )
}