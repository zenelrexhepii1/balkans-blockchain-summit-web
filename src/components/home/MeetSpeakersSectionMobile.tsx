import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { classNames } from "@/utils";
import { speakersMock } from "@/__mocks__";
import Image from "next/image";
import Link from "next/link";
import RightIcon from "@/assets/svg/RightIcon";
import LeftIcon from "@/assets/svg/LeftIcon";

const loopedSpeakers = Array.from({ length: 50 }, (_, i) => {
    return speakersMock[i % speakersMock.length];
});

export const MeetSpeakersSectionMobile: React.FC = () => {
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
            slidesToShow: 1,
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
      <div  className={classNames("block xl:hidden overflow-visible pt-8 px-4 relative h-full",
         isAutoplay ? "ticker-mode" : "stop-mode"
                )}>
    
                    <Slider {...settings} ref={sliderRef}>
    
                        {
                            loopedSpeakers.map((result, index) => {
                    
                                return (
                                    <Link href={`/speakers-2026/${result.speaker_id}`} passHref key={"speakers-mobile-" + index} >
                                    <div key={"speakers-mobile-" + index} className="relative w-full h-[450px]  bg-black border border-[#8B8787] text-center" 
                                  
                                    >
        
                                    {/* Nodes */}
                                    <div className="absolute w-2.5 h-2.5 bg-[#8B8787] top-[-6px] left-[-6px]" />
                                    <div className="absolute w-2.5 h-2.5 bg-[#8B8787] top-[-6px] right-[-6px]" />
                                    <div className="absolute w-2.5 h-2.5 bg-[#8B8787] bottom-[-6px] left-[-6px]" />
                                    <div className="absolute w-2.5 h-2.5 bg-[#8B8787] bottom-[-6px] right-[-6px]" />
                            
                                    {/* Optional middle edge nodes */}
                                   {/* <div className="absolute w-3 h-3 bg-gray-700 top-[-6px] left-1/2 -translate-x-1/2" /> */}
                                  {/*  <div className="absolute w-3 h-3 bg-gray-700 bottom-[-6px] left-1/2 -translate-x-1/2" /> */}
                                    <div className="absolute w-2.5 h-2.5 bg-[#8B8787] left-[-6px] z-20 top-[65%] -translate-y-1/2" />
                                    <div className="absolute w-2.5 h-2.5 bg-[#8B8787] right-[-6px] z-20 top-[65%] -translate-y-1/2" />

                                    <div className="border border-solid border-[#8B8787] w-full absolute top-[65%]"></div>

                                    {/* Image */}
                                    <div className="w-full h-[250px] p-5">
                                      <img
                                        src={result.speaker_image}
                                        alt=""
                                        className="w-full h-[250px]"
                                      />
                                    </div>
                            
                                    {/* Text */}
                                    <div className="pt-21 pb-6 text-center px-5">
                                      <h1 className="text-white font-venimg font-medium text-[22px] whitespace-nowrap mb-1">
                                       {result.speaker_name}
                                      </h1>
                                      <p className="text-[#3175FD] w-full font-regular-custom leading-normal text-sm">
                                        {result.speaker_position}
                                      </p>
                                    </div>
                                  </div>
                                  </Link>
                                )
                            })
                        }
                    </Slider>
                    <div className="pt-7 flex items-center justify-center w-full">
                        <Link href="/speakers-2026" passHref className="w-[95%] flex items-center justify-center bg-gradient-to-r to-[#4176F5] from-[#6B59F5] py-2.5">
                          <span className="text-white text-center text-xl font-regular-custom leading-normal">View all</span>
                        </Link>
                    </div>
                </div>
    )
}