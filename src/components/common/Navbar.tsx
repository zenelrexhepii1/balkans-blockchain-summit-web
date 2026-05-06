"use client"
import React, { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";
import { navbarMock } from "@/__mocks__";
import { usePathname } from "next/navigation";
import { classNames } from "@/utils";
import MenuIcon from "@/assets/svg/Menuicon";
import { NavbarMobile } from "./NavbarMobile";

import "@/app/scss/gradientButton.scss"
import { useHover } from "@/hooks";
import "@/app/scss/glowOnHoverCard.scss";
import BalkansBsLogo from "@/assets/svg/BalkansBsLogo";
import { GiveAwayBanner} from "./GiveAwayBanner";

export const Navbar: React.FC = () => {
    const [isOpenNavbarMobile,setIsOpenNavbarMobile] = useState(false);
    const [activeLink,setActiveLink] = useState("");
    const pathName = usePathname();
    const [isScroll,setIsScroll] = useState(true); //true 
    const [isVisible,setIsVisible] = useState(false);
    const {isHover,handleMouseEnter,handleMouseLeave} = useHover({initialState: false});
    const [becomeSponsorBtn,setBecomeSponsorBtn] = useState(false);
    const isSectionActive = Boolean(activeLink);
    const navbarRef = useRef<HTMLElement | null>(null);
    const [lastScrollY,setLastScrollY] = useState(0)

    const routesNavbarHidden = ["/register/","/become-sponsor/"];
  //  const navbarActive = typeof window !== "undefined" && window.scrollY > 50;
    
    useEffect(() => {
        if(typeof window !== "undefined" && window.scrollY < 100) {
            setActiveLink("")
        }

         window.addEventListener("scroll",handleScrollNavbar);
         window.addEventListener("mousedown",handleCloseNavbarMobileOutside);

         return () => {
            window.removeEventListener("scroll",handleScrollNavbar);
            window.removeEventListener("mousedown",handleCloseNavbarMobileOutside);
         }
    },[lastScrollY]);


    const handleScrollNavbar = () => {
        const currentScrollY: any = typeof window !== "undefined" && window.scrollY;
        if(currentScrollY === 0) {
            setIsScroll(true);
        }else {
            if(currentScrollY > lastScrollY + 5) {
                const scrollPosition = window.scrollY + 100;
    
                navbarMock.forEach((section) => {
                    const navSection = document.getElementById(section.id);
    
                    if (!navSection) return;
                  
                    const top = navSection.offsetTop;
                    const height = navSection.offsetHeight;
                  
                    if (scrollPosition >= top && scrollPosition < top + height) {
                      setActiveLink(section.id);
                    }
                });
               setIsScroll(false);
            }else if(window.scrollY < lastScrollY -5) {
               setIsScroll(true);
            }
        }
      setLastScrollY(window.scrollY);
    }

    const handleOpenNavbarMobile = () => {
       setIsOpenNavbarMobile(true);
    }

    const handleCloseNavbarMobile = () => {
        setIsOpenNavbarMobile(false);
    }

    const handleCloseNavbarMobileOutside = (e: MouseEvent) => {
        if(navbarRef && !navbarRef?.current?.contains(e.target as HTMLElement)) {
            setIsOpenNavbarMobile(false);
        }
    }

    return (
        <div className={classNames("fixed top-0 left-0 right-0 z-2000",
            routesNavbarHidden.includes(pathName) ? "hidden" : "block",
        )}>
                                 <GiveAwayBanner/>
        <nav className={classNames("w-full pointer-events-auto transition-all duration-500 ease-in-out bg-black px-5 lg:px-10 py-5",
           // isScroll ? "opacity-100 lg:py-1 translate-y-0 bg-[#5cf1d3]" : "opacity-0 lg:py-6 -translate-y-full bg-black",
           // lastScrollY ? "bg-[#5cf1d3]" : "bg-black"
        )}>
     
                  <div className="flex items-center justify-between">
                      <Link href="/" passHref className="no-underline outline-none cursor-pointer">
                      <div className={classNames("relative",
                     //   lastScrollY ? "w-25 lg:w-67.5" :"h-9 w-41"
                      )}>
                     {/*
                                {lastScrollY ? (
                                    <Image
                                    src="/images/BBS-LOGO-BLACK-.png"
                                     alt=""
                                     width={130}
                                     height={130}
                                     className="h-24 object-contain"
                                  />
                                  ): (
                                   <Image
                                   src="/images/BBS-Logo.png"
                                   alt=""
                                   fill
                                   className="h-9 object-contain w-41"
                                 />
                                  )}
                                 */}
                                 {/*
                                    <Image
                                   src="/images/BBS-Logo.png"
                                   alt=""
                                   fill
                                   className="h-9 object-contain w-41"
                                 />
                                 */}
                                 <BalkansBsLogo/>
                            
                       </div>
                     </Link>
                     <div className="hidden xl:flex items-center gap-10">
                     <div className="flex items-center gap-8">
                          {navbarMock?.map((result)=> {
                            /*
                             const isActiveLink = result.id === activeLink;
                             const isPathActive = pathName === result.linkUrl && !isSectionActive;
                             const className = lastScrollY
                            ? isActiveLink
                            ? "text-[#6d64ff] font-bold"
                            : isPathActive
                            ? "text-[#6d64ff] font-bold-custom"
                            : "text-black hover:text-[#6d64ff]"
                            :  isActiveLink
                            ? "text-[#6d64ff] font-bold"
                            : isPathActive
                             ? "text-[#5cf1d3] font-bold-custom"
                            : `${pathName === "/speakers/" || pathName.startsWith("/speakers/") ? "text-white" : "text-white"}`
                            */
                            return (
                                <Link key={"nav-id-" + result.id} href={result.linkUrl} passHref className="no-underline text-white hover:text-[#6d64ff] font-custom-tegular text-base link_custom">
                                <span className={classNames("text-base font-medium",
                                //className,
                                )}>{result.linkName}</span>
                           </Link>
                            )
                          })}
                     </div>
                    <div className="hidden lg:flex items-start md:gap-2 lg:gap-3">
                    <Link href="/register" passHref onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={classNames("bg-gradient-to-r from-[#2579FF] to-[#7057FF] relative overflow-hidden hidden lg:flex no-underline px-7 py-2",
                       // lastScrollY ? "bg-[#5CF1D3]" : "bg-[#e7e7e7]",
                        isHover && "gradient_btn"
                     )}>
                     <span className={classNames("text-white text-base z-100 font-medium font-regular-custom whitespace-nowrap",
                    
                     )}>Register now</span> 
                         {isHover && (
                              <div className="w-full">
                              <span className="glow_hover"/>
                              <span className="backdrop_hover backdrop_hover-gradient"/>
                          </div>
                         )}
                  </Link>
                  {/*
                  <Link href="/become-sponsor" onMouseEnter={() => setBecomeSponsorBtn(true)} onMouseLeave={() => setBecomeSponsorBtn(false)} passHref className={classNames("relative overflow-hidden hidden lg:flex no-underline px-8 py-2",
                       lastScrollY ? "bg-[#011832]" : "bg-[#6d64ff] gradient_btn",
                                 becomeSponsorBtn && "gradient_btn"
                     )}>
                     <span className={classNames("text-base font-medium uppercase font-bold-custom whitespace-nowrap z-100",
                        lastScrollY? "text-white" : "text-black",
                     )}>Become Sponsor</span> 
                        {becomeSponsorBtn && (
                              <div className="w-full">
                              <span className="glow_hover"/>
                              <span className="backdrop_hover backdrop_hover-gradient"/>
                          </div>
                         )}
                  </Link>
                  */}
                    </div>
                    </div>
                
                  <button type="button" className="bg-transparent outline-none block xl:hidden" onClick={handleOpenNavbarMobile}>
                    <MenuIcon width={30} height={30} stroke="#fff"/>
                  </button>
                
                  </div>
            
            <div className={classNames("w-full block xl:hidden absolute top-0",isOpenNavbarMobile ? "navbar_active" : "navbar_close")}>
            <NavbarMobile ref={navbarRef} handleCloseNavbarMobile={handleCloseNavbarMobile}/>
            </div>
        
        </nav>
        </div>
    )
}