"use client"
import React, { useEffect } from "react";
import { speakersMock } from "@/__mocks__";
import { Container } from "@/components/common";
import { SpeakerImage } from "@/components/speakers/SpeakerImage";
import { useHover, useImageLoader } from "@/hooks";
import Link from "next/link";
import AOS from "aos";
import { useRouter } from "next/navigation";
import { speakersLastYear } from "@/__mocks__/speakersLastYearMock";
import "@/app/scss/sponsorsStyle.scss"

export default function Page() {
    const { isHover, handleMouseEnter, handleMouseLeave } = useHover({ initialState: false });
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });

        return () => {
            AOS.refresh();
        }

    }, []);

    return (
        <div className="w-full relative min-h-screen">

            <Container className="w-full">
                <div className="pt-40 flex flex-col items-center justify-center gap-y-4">

                    <h4 className="text-white text-xl lg:text-[32px] font-regular-custom">
                        2026
                    </h4>
                    <h4 data-aos="fade-down" className="text-white text-3xl lg:text-[111px] font-venimg leading-none uppercase">
                        speakers
                    </h4>
                    {/*
               <Link  data-aos="fade-left" href="mailto:contact@balkansblockchainsummit.com" passHref className="bg-black hover:bg-[#6d64ff] relative flex overflow-hidden max-w-max transition-all duration-[0.3s ease-in-out] no-underline px-8 py-2.5 lg:py-3 gradient_btn"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                   >
                     <span className="text-sm lg:text-base z-100 text-white  uppercase font-custom-regular font-medium whitespace-nowrap">
                     BECOME A SPEAKER
                        </span> 
                        {isHover && (
                              <div className="w-full">
                              <span className="glow_hover"/>
                              <span className="backdrop_hover backdrop_hover-gradient"/>
                          </div>
                         )}
                  </Link>
                  */}
                </div>
           
                <div className="pt-10">
                    <div className="lg:border-t border-t-[#8B8787]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0">
                            {speakersMock.map((speaker, index) => (
                                <SpeakerImage
                                    key={`speaker-${speaker.speaker_id}`}
                                    index={index}
                                    speaker_id={speaker.speaker_id as number}
                                    speaker_image={speaker.speaker_image}
                                    speaker_name={speaker.speaker_name}
                                    speaker_position={speaker.speaker_position}
                                    linkUrl={`/speakers-2026/${speaker.speaker_id}`}
                                    title_color="text-white"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}