"use client"
import { navbarMock } from "@/__mocks__"
import CloseIcon from "@/assets/svg/CloseIcon"
import { classNames } from "@/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export const NavbarMobile: React.FC<{ref?: any,handleCloseNavbarMobile: () => void}> = ({ref,handleCloseNavbarMobile}) => {
    const pathName = usePathname();
    return (
        <div ref={ref} className="bg-black fixed right-0 top-0 w-70 lg:w-120 min-h-[120dvh]">
            <div className="w-full flex items-end justify-end py-6 px-7">
                 <button type="button" className="bg-transparent outline-none" onClick={handleCloseNavbarMobile}>
                    <CloseIcon width={35} height={35}/>
                 </button>
            </div>
                <div className="flex flex-col gap-y-5 h-screen items-start justify-center px-6">
                {navbarMock?.map((result) => (
                      <Link key={"navbar-mobile" + result.id} href={result.linkUrl} className="no-underline" passHref>
                        <span className={classNames("text-xl text-white font-custom-regular font-medium font-bold-custom whitespace-normal",
                            //pathName === result?.linkUrl ? "text-black" : "text-white"
                        )}
                        onClick={handleCloseNavbarMobile}
                        >
                            {result.linkName} 
                        </span>
                      </Link>
                ))}
                    <div className="flex items-start flex-col gap-4 lg:gap-6">
                        <Link href="/register" passHref className="bg-linear-to-r relative overflow-hidden from-[#2579FF] to-[#7057FF] px-5 py-1.5 w-full outline-none  bg-[linear-gradient(90deg,#2579FF,#7057FF,#2579FF)]
  bg-[length:200%_100%]
  bg-left
  transition-[background-position] duration-500 ease-in-out
  hover:bg-right">
                            <span className="text-[#CDCDCD] font-custom-regular text-base lg:text-xl font-normal leading-normal">Register now</span>
                        </Link>
                        <div
                            className="inline-block p-px
      bg-gradient-to-r from-[#2579FF] via-[#4BF3D3] to-[#7057FF]
      transition duration-300"
                        >
                            <Link
                                href="/become-sponsor"
                                className="block px-5 py-1.5 bg-black text-[#CDCDCD]"
                            >
                                <span className="font-custom-regular text-base lg:text-xl font-normal leading-normal">
                                    Become Sponsor
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}