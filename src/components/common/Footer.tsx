"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Container } from "./Container";
import Link from "next/link";
import { socialMock } from "@/__mocks__/socialsMock";
import { classNames } from "@/utils";
import { usePathname } from "next/navigation";
import Cube from "@/assets/svg/Cube";
import "@/app/scss/heroSection.scss"
import { isHiddenRoute } from "@/utils/routeVisiblity";


export const Footer: React.FC = () => {
    const [socialIconHover,setSocialIconHover] = useState(0);
    const pathName = usePathname();
    const pathname = usePathname();

    const hidden = isHiddenRoute(pathname);

    const handleMouseEnterSocialIcon = (index: number) => {
      setSocialIconHover(index);
    }

    const handleMouseLeaveSocialIcon = () => {
      setSocialIconHover(0)
    }


    return (
      <div className="relative overflow-hidden">
            <div className={classNames("flex items-center justify-center w-full pt-20",
                  hidden && "hidden"
            )}>
          <Cube/>
            <h4  data-aos="fade-left" className="text-white font-custom-regular text-[47px] lg:text-[100px] leading-none absolute pl-40 lg:pl-65 pt-5 lg:pt-20"><span className="font-bold">Beyond</span> <br/> Borders <br/> <span className="font-bold gradient-text-hero">On Chain</span></h4>
          </div>
        <footer className={classNames("w-full relative h-screen lg:h-[585px]  overflow-hidden footer_background",
            hidden ? "hidden" : "block",
        )}>
    
             <Container>
              <div className="absolute bottom-0 w-full px-12 lg:px-6 py-6 flex flex-col items-center lg:items-start justify-center  lg:justify-start">
             <div className="flex items-center flex-wrap lg:mb-7 w-full bottom-0 left-0 right-0 flex-col-reverse gap-y-1 lg:gap-y-0 lg:flex-row justify-between">
                    <div className="flex flex-col items-start flex-1">
                      <Link href="/speakers-2025" passHref className="no-underline">
                        <span className="text-white text-xl font-regular-custom">Speakers 2025</span>
                      </Link>
                    </div>
                   <div className="flex flex-col items-center gap-y-5 flex-1">
                      <h5 className="text-base text-white lg:text-2xl font-medium font-bold-custom uppercase">Follow Us</h5>
                      <div className="grid grid-cols-3 gap-6">
                          {socialMock?.map((result: any,index) => (
                            <Link key={"socials-" + index} href={result.linkUrl} target="_blank" passHref className="no-underline"
                            onMouseEnter={() => handleMouseEnterSocialIcon(result.id)}
                            onMouseLeave={handleMouseLeaveSocialIcon}
                            >
                              {socialIconHover === result.id ? result.iconWhite : result.icon}
                            </Link>
                          ))}
                      </div>
                   </div>
                   <div className="flex-1 text-center lg:text-right">
                    <p className="text-sm lg:text-base text-white">© 2026 Balkans Blockchain Summit. All Rights Reserved</p>
                   </div>
                  </div>
                  <Link href="/" passHref className="no-underline">
                    <div className="relative w-30 h-30 lg:w-[129px] lg:h-[56px]">
                       
                       <Image
                         src="/images/BBS-LOGO-WHITE-.png"
                         alt=""
                         fill
                         className="w-30 h-30 lg:w-[129px] lg:h-[56px] object-contain"
                       />
                       
                   </div>
                   </Link>
               </div>
             </Container>
           
        </footer>
        </div>
    )
}