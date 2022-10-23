import Image from "next/image";
import Link from "next/link";
import { iconFacebook, iconInstagram, iconLinkedin, iconTiktok, iconTwitter, iconYoutube, logoFooter } from "../public/images";

export default function Footer() {
   const sosmed = [
      {
         icon: iconLinkedin
      },
      {
         icon: iconInstagram
      },
      {
         icon: iconYoutube
      },
      {
         icon: iconFacebook
      },
      {
         icon: iconTiktok
      },
      {
         icon: iconTwitter
      }
   ]
   return (
      <div className="
            bg-secondary
            pt-[53px]
            pb-[33px]
            flex-col
        ">
         <div className="
                m-auto
                w-full
                max-w-screen-lg 
                px-[16px]
                flex
                flex-row
            ">
            <div className="
                    flex-col
                    w-[315px]
                    mr-[94px]
                ">
               <Image
                  src={logoFooter}
                  width={209}
                  height={81}
                  objectFit={'fit'}
               />
               <p
                  className="text-white text-[15px]"
               >LearnUp is an iPad app that can help to understand English material by making translation notes on words that are difficult to understand.</p>
            </div>

            <div className="flex-col flex">
               <div className="flex-col flex">
                  <h4 className="mb-[14px] font-bold text-white text-[20px]">Social Media</h4>

                  <div className="flex-row mb-[20px] flex">
                     {
                        sosmed.map((item, idx) => (
                           <div className="mr-[4px]" key={idx}>
                              <a href="#">
                                 <Image
                                    src={item.icon}
                                    width={25}
                                    height={25}
                                    objectFit={'fit'}

                                 />
                              </a>

                           </div>

                        ))
                     }
                  </div>
               </div>

               <div className="flex-col flex text-white">
                  <h4 className="mb-[14px] font-bold text-white text-[20px]">Company</h4>

                  <Link href="/about"><a>About us</a></Link>
                  <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                  <Link href="/terms-and-condition"><a>Terms and Condition</a></Link>

               </div>
            </div>

         </div>

         <div className="
                px-[16px]
                text-center
                mt-[83px]
            ">
            <p className="text-white text-[15px]">
               LearnUp Indonesia © 2022 All right reserved</p>
         </div>
      </div>
   )
}