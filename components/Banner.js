import Image from "next/image";
import { bannerPreview, iconApple } from "../public/images";

export default function Banner() {
   return (
      <div className='
        h-[70vw]
        max-h-[600px]
        bg-primary
        flex
      '>
         <div className="
                flex
                items-center
                w-full 
                max-w-screen-lg 
                m-auto
                px-[16px]">
            <div className="flex-col justify-center items-start w-[50%] mr-[33px]">
               <h1 className="
                  md:text-[64px]
                  sm:text-[30px]
                  font-extrabold
                  text-white
                  mb-8
               ">LearnUp</h1>
               <p className=" text-white">A stable and versatile PDF assistant on your iPad. To view, annotate, translate, make notes, get related notes, read and understand e-book PDF  in a simpler way. Download it for free!</p>
               <a href="#" className="
               inline-flex 
               items-center 
               bg-white 
               px-[40px] 
               py-[8px] 
               rounded-[25px]
               mt-[26px]
               ">
                  <Image
                     src={iconApple}
                     width={19}
                     height={23}
                     objectFit="fit"
                  />
                  <span className="
                  ml-[13px] 
                  text-[16px]
                  md:text-[24px]
                  ">Download</span>
               </a>
            </div>

            <Image
               src={bannerPreview}
               objectFit="fit"
            />


         </div>

      </div>
   )
}