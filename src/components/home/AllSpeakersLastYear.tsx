import { speakersMock } from "@/__mocks__";
import { speakersLastYear } from "@/__mocks__/speakersLastYearMock";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const loopedSpeakers = Array.from({ length: 50}, (_, i) => {
    return speakersLastYear[i % speakersLastYear.length];
});


export const AllSpeakersLastYear: React.FC = () => {
    return (
        <section className="w-full relative">
            <div className="flex items-center flex-col md:flex-row gap-y-7 lg:gap-y-6 justify-between  px-11 lg:px-24 py-25 lg:py-30">
                <h1 className="text-white font-venimg text-[41px] lg:text-[64px] leading-[113%]">all the<br className=""/> speakers <br className="hidden lg:block"/>
                from 2025</h1>
                <p className="text-white text-base lg:text-xl leading-[120%] lg:leading-normal font-medium font-regular-custom w-full lg:w-[410px]">
                The 2025 stage welcomed influential speakers from across the global blockchain ecosystem.
                Industry leaders, founders, and innovators shared insights, experiences, and perspectives that continue to shape the direction of Web3.
                </p>
            </div>
            
              <div className="absolute top-145 lg:top-118 w-full -z-50"
              >
                                <Image
                                    src={require("../../../public/images/lastyear-speakers-bg.png")}
                                    alt=""
                                    className="w-full h-[700px]"
                                />
                            </div>
                        
            <div className="w-full">
            <div className="sponsors_container px-6 w-full min-w-full z-1000">
            <div className="sponsors_track" style={{gap: "23px"}}>
                   {loopedSpeakers?.map((result,index) => (
                      <Link key={"allspeakerslastyear-" + index} href={`/speakers-2025/${result.id}`}
                       className="flex flex-col items-start gap-y-6"
                      >
                         <div className="relative w-[242px] h-[302px]">
                            <Image
                              src={result.speakerImage}
                              alt=""
                              fill
                              className="w-[242px] h-[302px]"
                            />
                         </div>
                         <h4 className="text-white w-full text-base lg:text-lg text-center font-venimg leading-normal">{result.speakerName}</h4>
                      </Link>
                   ))}
                </div>
                </div>
            </div>
        </section>
    )
};