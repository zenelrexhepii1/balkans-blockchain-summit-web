
import Link from "next/link";
import React from "react";
import "@/app/scss/sponsorsStyle.scss"
import "@/app/scss/glowOnHoverCard.scss";
import { useHover } from "@/hooks";
import { RegisterBanner } from "./RegisterBanner";
import { sponsorsMock } from "@/__mocks__/sponsorsPageMock";
import { classNames } from "@/utils";
import Image from "next/image";

import "@/app/scss/sponsorsStyle.scss"
import { VideoPlayer } from "../common";


const communityMediaSponsors = Array.from({ length: 50}, (_, i) => {
    return sponsorsMock.communityAndMediaSponsors[i % sponsorsMock.communityAndMediaSponsors.length];
});


export const SponsorsSection: React.FC = () => {
    const { isHoverWithId, handleMouseEnterWidthId, handleMouseLeaveWithId } = useHover({ initialNumber: 0 })
    return (
        <section className="relative w-full h-screen lg:h-[169vh] bg-black overflow-hidden flex items-center justify-center px-6">

            <div className="absolute top-1/2 left-1/2 w-[700px] h-screen sm:w-[1000px] sm:h-[1000px] lg:w-[1600px] lg:h-[1600px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden">

                <video
                    src="/videos/globi-new.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 📦 CONTENT */}
            <div className="relative z-10 w-full h-[638px] lg:h-max max-w-[930px] bg-black/90 p-6 sm:p-10 lg:p-12 text-left">

                <h1 className="text-white text-2xl sm:text-3xl lg:text-6xl font-bold font-venimg tracking-widest mb-8 sm:mb-10 text-center">
                    SPONSORS
                </h1>

                {/* TITLE SPONSORS */}
                <p className="text-[#3175FD] text-xs sm:text-lg text-center">Title Sponsors</p>
                <div className="flex flex-wrap justify-center items-center gap-5 my-8 text-gray-400">
                    {sponsorsMock?.titleSponsors?.map((result, index) => (
                        <Link key={index} href={result.sponsor_linkUrl} target="_blank">
                            <div className="w-[97px]  sm:w-[154px] h-[28px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                {result.sponsor_logo}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <div className="border border-[#D9D9D9] w-[32px] my-3" />
                </div>
                {/* PLATINUM */}
                <p className="text-[#32F1CF] text-xs sm:text-lg text-center">Platinum Sponsors</p>
                <div className="flex flex-wrap justify-center items-center gap-5 my-8 text-gray-500">
                    {sponsorsMock?.platinumSponsors?.map((result, index) => (
                        <Link key={index} href={result.sponsor_linkUrl} target="_blank">
                            <div className="w-[97px]  sm:w-[154px] h-[28px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                {result.sponsor_logo}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <div className="border border-[#D9D9D9] w-[32px] my-3" />
                </div>
                {/* SILVER */}
                <p className="text-[#D9D9D9] text-xs sm:text-lg text-center">Silver Sponsors</p>
                <div className="flex flex-wrap justify-center items-center gap-5 my-8 text-gray-600">
                    {sponsorsMock?.sliverSponsors?.map((result, index) => (
                        <Link key={index} href={result.sponsor_linkUrl} target="_blank">
                            <div className="w-[97px]  sm:w-[154px] h-[28px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                {result.sponsor_logo}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <div className="border border-[#D9D9D9] w-[32px] my-3" />
                </div>
                {/* mobile */}
                <div className="flex flex-col">
                <p className="text-[#D9D9D9] text-xs sm:text-lg text-center">Community & Media Sponsors</p>
                <div className="sponsors_container px-2 my-8">
                <div className="sponsors_track items-center" style={{gap: 20}}>
                {communityMediaSponsors?.map((result, index) => (
                            <Link key={index} href={result.sponsor_linkUrl} target="_blank">
             
                                   {result.image_sponsor ? (
                                <div className="relative w-[97px] lg:w-[100px] h-[75px]">
                                <Image
                               src={`${result.image}`}
                               alt=""
                               fill
                               className="object-cover"
                             />
                             </div>
                                   ): (
                                    <div className="w-[97px] relative  sm:w-[154px] h-[28px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                    {result.sponsor_logo}
                                    </div>
                                   )}
                             
                            </Link>
                        ))}
                    </div>
                    </div>
                </div>
                {/*
                <div className="relative hidden lg:block">
                    {/* fade edges (optional but nice UX) */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10 md:hidden" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10 md:hidden" />

                    {/* COMMUNITY 
                    <p className="text-[#D9D9D9] text-xs sm:text-lg text-center">Community & Media Sponsors</p>
                    <div className="flex flex-nowrap md:flex-wrap
      md:justify-center items-center
      gap-5 my-8 text-gray-600
      overflow-x-auto md:overflow-hidden
      scrollbar-hidden">
                        {sponsorsMock?.mediaSponsors?.map((result, index) => (
                            <Link key={index} href={result.sponsor_linkUrl} target="_blank">
                                <div className="w-[97px]  sm:w-[154px] h-[28px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                    {result.sponsor_logo}
                                </div>
                            </Link>
                        ))}
                        {sponsorsMock?.communitySponsors?.map((result, index) => (
                            <Link key={index} href={result.sponsor_linkUrl} target="_blank">
                                <div className="w-[97px]  sm:w-[154px] h-[28px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                    {result.sponsor_logo}
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
*/}


            </div>
        </section>
    )
}