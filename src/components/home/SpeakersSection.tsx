"use client";
import React, { useState } from "react";
import { Container } from "../common/Container";
import "@/app/scss/speakersCarousel.scss"
import { speakersMock } from "@/__mocks__";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/utils";
import { useHover, useImageLoader } from "@/hooks";
import { Skeleton } from "../common/Skeleton";
import "@/app/scss/glowOnHoverCard.scss"


export const SpeakersSection: React.FC = () => {
    const [isHoverSpeaker,setIsHover] = useState(0);
    const {isHover,handleMouseEnter,handleMouseLeave} = useHover({initialState: false});
    const {isLoadingImage,handleOnLoadImage} = useImageLoader(true);

    const handleShowSpeaker = (index: number) => {
        setIsHover(index);
    }

    return (
        <section id="speakers" className="w-full relative">
             <Container>
             <div className="w-full flex items-start lg:items-center flex-col lg:flex-row justify-between gap-y-6 lg:gap-y-0">
                   <h4 data-aos="fade-right" className="text-5xl lg:text-8xl  font-bold title_gradient font-boldpixels-custom uppercase leading-10 lg:leading-20">
                      <span className="text-[#5cf1d3]">Meet</span><br/>
                      The Speakers
                   </h4>
                   <Link data-aos="fade-left" href="mailto:contact@balkansblockchainsummit.com" passHref className="bg-black hover:bg-[#6d64ff] relative flex overflow-hidden max-w-max transition-all duration-[0.3s ease-in-out] no-underline px-8 py-2.5 lg:py-3 gradient_btn"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                   >
                     <span className="text-sm lg:text-base z-100 text-white font-medium uppercase font-bold-custom whitespace-nowrap">
                     become a speaker
                        </span> 
                        {isHover && (
                              <div className="w-full">
                              <span className="glow_hover"/>
                              <span className="backdrop_hover backdrop_hover-gradient"/>
                          </div>
                         )}
                  </Link>
              </div>
             </Container>
             <div className="carousel_speakers pt-8 lg:pt-20">
                  <div className="carousel_speakers_track">
                      {speakersMock?.map((result,index) => (
                         <div key={"speakers-" + result.speaker_id} className="carousel_speakers_item relative overflow-hidden pointer-events-auto">
                            <Link href={`/speakers/${result.speaker_id}`} passHref className="no-underline pointer-events-auto" 
                       >
       {isLoadingImage && (<Skeleton className="h-113 object-cover transition-transform duration-300 ease-in-out hover:scale-125"/> )}
                            <Image
                              src={result.speaker_image}
                              alt=""
                              width={450}
                              height={450}
                              onMouseEnter={() => handleShowSpeaker(result.speaker_id)}
                              onMouseLeave={(e) => {
                                if (typeof window !== "undefined" && !e.currentTarget.contains(e.relatedTarget as any)) {
                                    setIsHover(0)
                                }
                              }}
                              className={classNames("h-113 object-cover transition-transform duration-300 ease-in-out hover:scale-125",
                                isLoadingImage ? "hidden" : "block"
                              )}
                              onLoadingComplete={handleOnLoadImage}
                              loading="eager"
                            />
                            </Link>
                          {isHoverSpeaker === result.speaker_id && (
                              <div className="bg-black/60 w-112.5 h-75 lg:h-[50vh] overflow-hidden z-100 absolute bottom-0 pointer-events-none cursor-pointer">
                                   <div className="px-6 flex transition-all py-6 duration-300 relative ease-in-out items-start justify-end gap-y-2 flex-col h-75 lg:h-[50vh]">
                                       <h4 className="text-white text-2xl font-regular-custom leading-none whitespace-normal">{result.speaker_name}</h4>
                                       <p className="text-white text-base font-medium font-regular-custom">{result.speaker_position}</p>
                                   </div>
                            </div>
                          )}
                      
                         </div>
                      ))}
                  </div>
                  <div className="carousel_speakers_track">
                      {speakersMock?.map((result,index) => (
                            <div key={"speakers-2" + result.speaker_id} className="carousel_speakers_item relative overflow-hidden pointer-events-auto">
                            <Link href="#" passHref className="no-underline pointer-events-auto" 
                       >
        
        {isLoadingImage && (<Skeleton className="h-113 object-cover transition-transform duration-300 ease-in-out hover:scale-125"/> )}
                            <Image
                              src={result.speaker_image}
                              alt=""
                              width={450}
                              height={450}
                              onMouseEnter={() => handleShowSpeaker(result.speaker_id)}
                              onMouseLeave={(e) => {
                                if (typeof window !== "undefined" && !e.currentTarget.contains(e.relatedTarget as any)) {
                                    setIsHover(0)
                                }
                              }}
                              className={classNames("h-113 object-cover transition-transform duration-300 ease-in-out hover:scale-125",
                                isLoadingImage ? "hidden" : "block"
                              )}
                              onLoadingComplete={handleOnLoadImage}
                              loading="eager"
                            />
                            </Link>
                          {isHoverSpeaker === result.speaker_id && (
                              <div className="bg-black/60 w-112.5 h-75 lg:h-[50vh] overflow-hidden z-100 absolute bottom-0 pointer-events-none cursor-pointer">
                                   <div className="px-6 py-6 flex items-start justify-end gap-y-2 flex-col h-75 lg:h-[50vh]">
                                       <h4 className="text-white text-2xl font-regular-custom leading-none whitespace-normal">{result.speaker_name}</h4>
                                       <p className="text-white text-base font-medium font-regular-custom">{result.speaker_position}</p>
                                   </div>
                            </div>
                          )}
                      
                         </div>
                      ))}
                  </div>
                  <div className="carousel_speakers_track">
                      {speakersMock?.map((result,index) => (
                             <div key={"speakers-3" + result.speaker_id} className="carousel_speakers_item relative overflow-hidden pointer-events-auto">
                             <Link href="#" passHref className="no-underline pointer-events-auto" 
                        >
         
         {isLoadingImage && (<Skeleton className="h-113 object-cover transition-transform duration-300 ease-in-out hover:scale-125"/> )}
                            <Image
                              src={result.speaker_image}
                              alt=""
                              width={450}
                              height={450}
                              onMouseEnter={() => handleShowSpeaker(result.speaker_id)}
                              onMouseLeave={(e) => {
                                if (typeof window !== "undefined" && !e.currentTarget.contains(e.relatedTarget as any)) {
                                    setIsHover(0)
                                }
                              }}
                              className={classNames("h-113 object-cover transition-transform duration-300 ease-in-out hover:scale-125",
                                isLoadingImage ? "hidden" : "block"
                              )}
                              onLoadingComplete={handleOnLoadImage}
                              loading="eager"
                            />
                             </Link>
                           {isHoverSpeaker === result.speaker_id && (
                               <div className="bg-black/60 w-112.5 h-75 lg:h-[50vh] overflow-hidden z-100 absolute bottom-0 pointer-events-none cursor-pointer">
                                    <div className="px-6 py-6 flex items-start justify-end gap-y-2 flex-col h-75 lg:h-[50vh]">
                                        <h4 className="text-white text-2xl font-regular-custom leading-none whitespace-normal">{result.speaker_name}</h4>
                                        <p className="text-white text-base font-medium font-regular-custom">{result.speaker_position}</p>
                                    </div>
                             </div>
                           )}
                       
                          </div>
                      ))}
                  </div>
             </div>
        </section>
    )
}