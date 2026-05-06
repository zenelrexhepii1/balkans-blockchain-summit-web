"use client";

import { FC } from "react";
import "@/app/scss/heroSection.scss"
import Link from "next/link";
import { socialMock } from "@/__mocks__/socialsMock";
import { useHover } from "@/hooks";
import Image from "next/image";
import "@/app/scss/sponsorsStyle.scss"

export const HeroSection: FC = () => {
    const slides = Array.from({ length: 50 }, (_, i) => i);
    return (
        <>
            <section className="bg-black w-full hero_background min-h-screen lg:min-h-171.25 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-y-8 relative lg:-top-2 w-full lg:w-208.5">
                    <h4 className="text-[#FDF9F7] text-[50px] lg:text-[69px] font-venimg text-center leading-[95%] space-[3%]">Beyond Borders.
                        <br />
                        <span className="gradient-text-hero font-bold uppercase">On Chain</span>
                    </h4>
                    <p className="text-[#CDCDCD] text-center text-xl lg:text-2xl font-regular-custom leading-none"><span className="font-bold-custom">Third edition</span> of our conference</p>
                    <div className="flex  w-[72%] lg:w-max items-center flex-col lg:flex-row gap-4 lg:gap-6">
                        <Link href="/register" passHref className="bg-linear-to-r relative overflow-hidden from-[#2579FF] to-[#7057FF] px-5 py-3 text-center lg:text-left lg:py-1.5  outline-none w-full lg:w-max bg-[linear-gradient(90deg,#2579FF,#7057FF,#2579FF)]
  bg-[length:200%_100%]
  bg-left
  transition-[background-position] duration-500 ease-in-out
  hover:bg-right">
                            <span className="text-[#CDCDCD] font-custom-regular text-base lg:text-xl font-normal leading-normal">Register now</span>
                        </Link>
                        <div
                            className="inline-block p-px
      bg-gradient-to-r from-[#2579FF] via-[#4BF3D3] to-[#7057FF]
      transition duration-300 w-full lg:w-max"
                        >
                            <Link
                                href="/become-sponsor"
                                className="block w-full lg:w-max px-5 py-3 text-center lg:text-left lg:py-1.5  bg-black text-[#CDCDCD]"
                            >
                                <span className="font-custom-regular text-base lg:text-xl font-normal leading-normal">
                                    Become Sponsor
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*
            <div className="w-full absolute bottom-6 flex items-center justify-center gap-5">
                {socialMock?.map((result) => (
                    <Link href={result?.linkUrl} key={"homepage-socials-" + result.id} target="_blank" className="no-underline outline-none"
                        onMouseEnter={() => handleMouseEnterWidthId(result.id)}
                        onMouseLeave={handleMouseLeaveWithId}
                    >
                        <span>
                            {isHoverWithId === result.id ? result.iconWhite : result.icon}
                        </span>
                    </Link>
                ))}
            </div>
            */}
            </section>
            <div className="hidden lg:block">
            <div className="sponsors_container px-6">
                <div className="sponsors_track">
                    <div className="flex items-center gap-24 py-5">
                        {slides?.map((result, index) => (
                            <h4 key={"slide-homepage-" + index} className="text-white text-xl font-regular-custom font-medium leading-normal">
                                Beyond Borders.  <span className="text-[#7057FF]">On Chain</span>
                            </h4>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
