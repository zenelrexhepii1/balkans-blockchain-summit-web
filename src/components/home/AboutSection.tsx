import React from "react";
import { Container } from "../common/Container";
import Image from "next/image";
import { sliderMock } from "@/__mocks__";

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="w-full">
            <div className="w-full relative max-w-full h-full lg:h-screen bg-[#011832] py-8 lg:py-0">
                 <div className="flex flex-col items-center justify-center lg:h-screen">
                 <div className="flex flex-col-reverse xl:flex-row-reverse gap-10">
                  
                  <div className="flex items-center gap-6 lg:pl-6">
                  <div className="realtive w-full lg:w-[450px] overflow-hidden" data-aos="fade-down">
                           <Image
                               src="/images/slide-1.jpg"
                               alt=""
                               width={0}
                               height={0}
                               className="w-full h-[150px] lg:h-[27.78vh] object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                           />
                       </div>
                  <div className="flex items-start gap-y-4 flex-col w-full lg:w-[550px]">
                       <div className="realtive w-full overflow-hidden" data-aos="fade-left">
                           <Image
                               src="/images/slide-1.jpg"
                               alt=""
                               width={0}
                               height={0}
                               className="w-full h-[150px] lg:h-[38.89vh] object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                           />
                       </div>
                       <div className="realtive w-full overflow-hidden" data-aos="fade-left">
                           <Image
                               src="/images/slide-2.jpg"
                               alt=""
                               width={0}
                               height={0}
                               className="w-full h-[150px] lg:h-[38.89vh] object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                           />
                       </div>
               
                   </div>
               
                  </div>
                   <div className="w-full px-6 lg:pl-24 lg:p-14 flex flex-col gap-y-6">
                         <h4 data-aos="fade-right" className="text-3xl lg:text-4xl font-mediuml font-bold-custom uppercase leading-normal mb-2 text-white">Virtual Reality
                         Where reality ends </h4>
                         <p data-aos="fade-right" className="text-sm text-white font-medium lg:text-base font-custom-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium voluptatem ullam numquam? Minima dicta iste, assumenda necessitatibus nobis dolorum, atque omnis quod repudiandae, voluptate esse odio sequi. Labore, ipsam.</p>
                         <h4  data-aos="fade-right" className="text-3xl text-white lg:text-4xl font-mediuml font-bold-custom uppercase leading-normal mb-2">Virtual Reality </h4>
                         <h4 data-aos="fade-right" className="text-3xl text-white lg:text-4xl font-mediuml font-bold-custom uppercase leading-normal mb-2">Virtual Reality</h4>
                   </div>
               </div>
                 </div>
            </div>
        </section>
    )
}