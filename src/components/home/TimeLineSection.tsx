"use client";
import { timelineData } from "@/__mocks__/timelineMock";
import { classNames } from "@/utils";
import Image from "next/image";
import React from "react";


export const TimeLineSection: React.FC = () => {
    return (
        <section className="w-full pt-5 lg:pt-30 px-11 lg:px-0">
            <div className="w-full lg:px-20 pb-17 flex flex-col xl:flex-row items-start gap-y-6 justify-between">
                <h4 data-aos="fade-right" className="text-[40px] lg:text-[116px] text-white font-venimg leading-none mt-0 font-medium">Timeline</h4>
                <p className="text-white text-sm lg:text-base font-regular-custom w-full xl:w-[420px]">
                From its first edition to a growing regional movement, Balkans Blockchain Summit has continuously expanded in scale, impact, and global reach.
Each year marks a new milestone, bringing together builders, innovators, and industry leaders shaping the future of Web3 in the Balkans and beyond.
Today, it stands as a key platform connecting ideas, capital, and opportunities, positioning the region as an emerging force in the global blockchain ecosystem.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12.5 lg:gap-y-0 lg:grid-cols-3">
                {timelineData?.map((result) => (
                    <article key={"timeline-" + result.id} className={classNames("w-full relative border-t lg:border-t-[#8B8787] lg:border-b lg:border-b-[#8B8787] lg:border-l",
                        result.id === 1 ? "border-l-transparent" : "lg:border-l-[#8B8787]"
                    )}>
                        {result.id === 1 ? "" :
                         <span className="hidden lg:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2
        w-3 h-3 bg-[#8B8787]">

                            <span className="w-1.5 h-1.5 bg-[#8B8787]" />
                        </span>
                        }
                       {result.id === 3 ? "" :    <span className="hidden lg:block absolute -bottom-3 right-0 translate-x-1/2 -translate-y-1/2
         w-3 h-3 bg-[#8B8787]">

                            <span className="w-1.5 h-1.5 bg-[#8B8787]" />
                        </span>} 
                        <div className="lg:border-b lg:border-b-[#8B8787] lg:py-6 lg:px-0">
                            <div className="relative w-full lg:w-[383.83px] mx-auto h-[352px] lg:h-[40.3vh] overflow-hidden">
                                <Image
                                    src={result.timeline_image}
                                    alt=""
                                    fill
                                    className="w-full lg:w-[383px] h-[352px] lg:h-[40.3vh] transform transition-transform duration-500 hover:scale-110 object-cover"
                                    loading="lazy"
                                />
                            </div>
                           <div className="relative top-6">
                           {result.id === 3 ? "" :    <span className="hidden lg:block absolute right-0 translate-x-1/2 -translate-y-1/2
         w-3 h-3 bg-[#8B8787]">

                            <span className="w-1.5 h-1.5 bg-[#8B8787]" />
                        </span>} 
                           </div>
                        </div>
                        <div className="w-full flex flex-col items-start gap-y-10 xl:px-20 mx-auto pt-8">
                            <div className="h-9" data-aos="fade-down">
                                {result.timeline_logo}
                            </div>
                            <h4 data-aos="fade-down" className="text-white text-[41px] font-venimg font-medium leading-none whitespace-nowrap">{result.title}</h4>
                            <div className="flex flex-col items-start gap-y-6">
                                {result.timeline_list?.map((result, index: number) => (
                                    <div key={"timeline-list-" + index} className={classNames("w-full py-1 lg:py-1.5",
                                        [0, 1].includes(index) && "border-b border-[#FFFFFF]"
                                    )}>
                                        <p data-aos="fade-down" className="text-white text-base lg:text-xl font-custom-regular whitespace-normal">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}