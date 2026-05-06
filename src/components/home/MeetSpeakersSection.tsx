
"use client"
import { speakersMock } from "@/__mocks__"
import BlockTalkNewLogo from "@/assets/svg/BlocktalkNewLogo"
import BlockTalkOldLogo from "@/assets/svg/BlocktalkOldLogo"
import BlocktalkWhiteLogo from "@/assets/svg/BlocktalkWhiteLogo"
import LeftIcon from "@/assets/svg/LeftIcon"
import RightIcon from "@/assets/svg/RightIcon"
import { useCarousel } from "@/hooks/useCarosuel"
import { classNames } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import React, { useCallback, useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MeetSpeakersSectionMobile } from "./MeetSpeakersSectionMobile"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Optional modules
import { Navigation, Autoplay } from 'swiper/modules';

const loopedSpeakers = Array.from({ length: 50 }, (_, i) => {
    return speakersMock[i % speakersMock.length];
});

export const MeetSpeakersSection: React.FC = () => {

    const sliderRef = useRef<any>(null);
    const swiperRef = useRef<any>(null);
    const [speed, setSpeed] = useState(6000);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [pendingMove, setPendingMove] = useState<'next' | 'prev' | null>(null);
  
    const handleManualClick = (direction: 'next' | 'prev') => {
      // 1. Stop the internal timer
      sliderRef.current?.slickPause();
      
      // 2. Change state immediately to toggle CSS classes
      setSpeed(500);
      setIsAutoplay(false);
      setPendingMove(direction);
    };
  
    useEffect(() => {
      // 3. Trigger the move only after the 'manual-mode' CSS is active
      if (!isAutoplay && pendingMove) {
        if (pendingMove === 'next') {
          sliderRef.current?.slickNext();
        } else {
          sliderRef.current?.slickPrev();
        }
        setPendingMove(null);
      }
      const timer = setTimeout(() => {
         setIsAutoplay(true);
         sliderRef.current?.slickPlay();
         setSpeed(6000);
      },5000);

      return () => {
        clearTimeout(timer);
      }
    }, [isAutoplay, pendingMove,speed]);
  
    const settings = {
      infinite: true,
      autoplay: isAutoplay,
      autoplaySpeed: 0,
      speed: speed,
      cssEase: isAutoplay ? "linear" : "ease-out",
      slidesToShow: 3,
      slidesToScroll: 1, // Crucial: moves only ONE item
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 1 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1, slidesToScroll: 1 } // 1 item on mobile
        }
      ]
    };

   

    
    return (
        <section className="w-full py-18 lg:py-20 relative">
            <div className="w-full flex flex-col items-center justify-center lg:h-[320px]">
                <div className="flex items-center flex-col justify-center gap-y-6 z-100">
                    <h5 className="text-white text-[32px] lg:text-3xl font-regular-custom leading-none">2026</h5>

                    <h4 className="text-white text-[45px] lg:text-[116px] font-venimg leading-none">Speakers</h4>
                </div>
                <div className="hidden lg:block absolute -top-50 left-0 right-0 w-full -z-50">
                    <Image
                        src={require("../../../public/images/speaker_2026-banner.png")}
                        alt=""
                        className="w-full h-[700px]"
                    />
                 
                </div>

                <div className="hidden lg:flex items-center justify-between w-full px-6 z-50 absolute overflow-hidden top-100 pointer-events-auto">
                    <button type="button"  onClick={() => handleManualClick("prev")} className="bg-black prev-btn pointer-events-auto border border-solid border-[#A9A9A9]  flex w-[68px] h-[68px] items-center justify-center outline-none cursor-pointer">
                        <RightIcon />
                    </button>
                    <Link href="/speakers-2026" passHref className="bg-black w-[188px] py-3 flex items-center justify-center">
                      <span className="text-lg text-[#CDCDCD] font-custom-regular font-medium leading-none">See more</span>
                    </Link>
                    <button type="button"   onClick={() => handleManualClick("next")} className="bg-black next-btn pointer-events-auto flex border border-solid border-[#A9A9A9] w-[68px] h-[68px]  items-center justify-center outline-none cursor-pointer">
                        <LeftIcon />
                    </button>
                </div>


            </div>
            <div className="hidden lg:flex items-center justify-center w-full"
            >
                <div className="line h-125 w-px bg-[#8B8787] absolute left-[33.3%] top-0 -z-20" />
                <div className="line h-125 w-px bg-[#8B8787] absolute left-[66.6%] top-0 -z-20" />
            </div>
            <div  className={classNames("hidden lg:block overflow-visible px-6 lg:px-0 pt-24.5 relative h-full",
     isAutoplay ? "ticker-mode" : "manual-mode"
            )}>

         <Slider {...settings} ref={sliderRef}>
                    {
                        loopedSpeakers.map((result, index) => {
                            //   const col = index % 3;
                            //const isFirstCol = col === 0;
                            //  const isLastCol = col === 2;
                            return (
                      
                                <article className="min-w-[350px] lg:w-[500px] lg:h-[800px] relative py-5 lg:border-b border-b-[#8B8787] lg:border-r lg:border-r-[#8B8787]"
 key={"speakers-section-home-" + index}>
                                 
                                     
                                    <Link href={`/speakers-2026/${result.speaker_id}`} className="no-underline">
                                        {/* LEFT NODE */}


                                        <span className="hidden md:block absolute bottom-[325px] -left-0 -translate-x-1/2 -translate-y-1/2
                    w-3 h-3 bg-[#8B8787]">

                                            <span className="w-1.5 h-1.5 bg-[#8B8787]" />
                                        </span>


                                        <span className="hidden md:block absolute -bottom-5 right-0 translate-x-1/2 -translate-y-1/2
             w-3 h-3 bg-[#8B8787]">

                                            <span className="w-1.5 h-1.5 bg-[#8B8787]" />
                                        </span>



                                        <div className="lg:border-b lg:border-b-[#8B8787] w-full py-6">
                                            <div className="relative w-full lg:w-[318px] h-[450px] lg:h-[394px] mx-auto">
                                                <Image
                                                    src={result.speaker_image}
                                                    alt=""
                                                    fill
                                                    className="w-full lg:w-[318px] h-[350px] lg:h-[394px] object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="content px-6 lg:px-10 pt-10 h-full w-full">
                                            <h4 className="text-white font-venimg text-2xl lg:text-[36px] leading-none mb-1">{result.speaker_name}</h4>
                                            <p className="text-[#3175FD] font-regular-custom text-sm lg:text-base leading-normal w-full lg:w-full mb-6">{result.speaker_position}</p>
                                            <p className="text-white font-regular-custom text-sm lg:text-[17px] leading-normal whitespace-normal">{result.speaker_description.slice(0, 260)}..</p>

                                        </div>
                                    </Link>
                             
                                </article>
                          
                           
                            )
                        })
                    }
                    </Slider>

            </div>
              <MeetSpeakersSectionMobile/>
        </section>
    )
}