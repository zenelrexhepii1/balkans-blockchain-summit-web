"use client"
import { feedbackData } from "@/__mocks__/feedbackMock";
import LeftIcon from "@/assets/svg/LeftIcon";
import RightIcon from "@/assets/svg/RightIcon";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FeedBackCard } from "./FeedBackCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { classNames } from "@/utils";
import "@/app/scss/sponsorsStyle.scss"
import "@/app/scss/heroSection.scss"
import { useCarousel } from "@/hooks/useCarosuel";


export const FeedbackSection: React.FC = () => {
    const {
        visibleItems,
        next,
        prev,
        isStart,
        isEnd,
      } = useCarousel(feedbackData, 1); // show 3 at a time
    const sliderRef = useRef<Slider>(null); // ref to control slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const feedback_data = Array.from({ length: 5 }, () => feedbackData).flat();
 

    return (
     
        <section className="relative w-full lg:h-[170vh] overflow-hidden border-b lg:border-b-[#A9A9A9]">
               <div className="flex flex-col items-center justify-center gap-y-5 lg:gap-y-6 w-full absolute pt-5 lg:pt-37">
            <h4 data-aos="fade-down" className="text-white text-2xl text-center lg:text-[51px] font-venimg font-medium w-full">Kosovo is emerging<br className="" />
                    as a blockchain innovation hub</h4>
                <p  data-aos="fade-down" className="text-white w-[289px] lg:w-full  text-base text-center lg:text-xl font-regular-custom leading-normal">
                    with a young population, low costs, and strategic global connections.
                </p>
                <p  data-aos="fade-down" className="text-white text-base lg:text-xl font-regular-custom leading-normal">
                    The future of technology starts here.
                </p>
                <div className="block relative w-[169px] lg:w-103.5 h-[183px] lg:h-112 -z-10 top-7 lg:top-0">
                <Image
                    src="/images/ks.png"
                    alt=""
                    fill
                    className="w-full h-20"
                />
            </div>
            </div>
            <div className="pt-88 w-full relative">

         
            <div className="hidden lg:block w-full">
                <div className="relative w-full h-[500px] lg:h-[750px] -z-50">
                    <Image
                        src="/images/feedback_top.png"
                        alt=""
                        fill
                        className="w-full h-[500px] lg:h-[750px] object-cover"
                    />
                   
                </div>
            </div>

            <div className="hero_mobile-feedback lg:hidden w-full h-[400px] lg:h-[600px]"/>

       

            <div className="absolute top-[62%] lg:top-[83%] flex justify-center w-full overflow-hidden">
            <div className="flex items-center gap-3 lg:gap-14 justify-center w-full">
                      <div className="flex flex-col items-center gap-y-2">
                          <h5  data-aos="fade-left" className="text-white text-[40px] lg:text-[130px] font-venimg font-medium leading-none">23</h5>
                          <p  data-aos="fade-up" className="text-white text-sm lg:text-base leading-none font-custom-regular font-normal">Day 1</p>
                      </div>
                      <h3  data-aos="fade-down" className="text-white gradient-text-hero font-custom-regular text-2xl lg:text-5xl leading-none">May</h3>
                      <div className="flex flex-col items-center gap-y-2">
                          <h5  data-aos="fade-right" className="text-white text-[40px] lg:text-[130px] font-venimg font-medium leading-none">24</h5>
                          <p  data-aos="fade-up" className="text-white text-sm lg:text-base leading-none font-custom-regular font-normal">Day 2</p>
                      </div>
                  </div>
            </div>
        
            <div
  style={{
    position: "absolute",
    insetInline: 0,
    width: "70%",
    margin: "auto",
    height: "500px",
    background: "linear-gradient(90deg, #32F1CF, #7057FD, #2679FD)",
    filter: "blur(200px)",
    borderRadius: "100px",
    zIndex: 0,
  }}
/>

          {/* old design !! do not remove
            <div className="w-full  bg-[linear-gradient(270deg,#7057FD,#2679FD,#7057FD)]
        bg-[length:400%_400%]
        animate-[gradientMove_8s_ease_infinite] h-[138px] flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-center lg:justify-between w-full px-4 lg:px-10">
                    <h4 data-aos="fade-right" className="text-[30px] lg:text-[116px] text-white font-venimg leading-none mt-0 font-medium">Feedbacks</h4>
                    <div className="hidden lg:flex items-start gap-4 lg:gap-6">
                        <button type="button" disabled={currentSlide === 0} onClick={() => sliderRef.current?.slickPrev()} role="button" className="hover:bg-[#614AFC] active:bg-[#614AFC] transition-all duration-200 ease-in-out outline-none w-[50px] lg:w-[68px] h-[50px] lg:h-[78px] flex items-center justify-center flex-col">
                            <RightIcon />
                        </button>
                        <button type="button" disabled={currentSlide >= feedbackData.length - 3} onClick={() => sliderRef.current?.slickNext()} role="button" className="active:bg-[#614AFC] hover:bg-[#614AFC] transition-all duration-200 ease-in-out outline-none  w-[50px] lg:w-[68px] h-[50px] lg:h-[78px] flex items-center justify-center flex-col">
                            <LeftIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className="sponsors_container px-6 min-w-full z-1000">
                <div className="sponsors_track">
                    {feedback_data.map((result, index) => (
                        <div key={"feedback-article-" + index} className={`px-1 h-full min-h-full`}
                         style={{width: `${result.size}px`}}
                        >
                            <FeedBackCard
                                feedback_image={result.feedback_image}
                                feedback_name={result.feedback_name}
                                size={result.size as any}
                            />
                        </div>
                    ))}

                </div>
            </div>
            */}
            {/*
                <div className="relative -top-11 w-full h-[750px] -z-100 hero_mobile-feedback">
                    <Image
                        src="/images/feedback_down.png"
                        alt=""
                        fill
                        className="w-full h-[750px] object-fill hidden lg:block"
                    />
                  <div className="absolute w-full bottom-72">
                  <div className="flex items-center gap-3 lg:gap-14 justify-center w-full">
                      <div className="flex flex-col items-center gap-y-2">
                          <h5  data-aos="fade-left" className="text-white text-[90px] lg:text-[130px] font-venimg font-medium leading-none">23</h5>
                          <p  data-aos="fade-up" className="text-white text-base leading-none font-custom-regular font-normal">Day 1</p>
                      </div>
                      <h3  data-aos="fade-down" className="text-white gradient-text-hero font-custom-regular text-3xl lg:text-5xl leading-none">May</h3>
                      <div className="flex flex-col items-center gap-y-2">
                          <h5  data-aos="fade-right" className="text-white text-[90px] lg:text-[130px] font-venimg font-medium leading-none">24</h5>
                          <p  data-aos="fade-up" className="text-white text-base leading-none font-custom-regular font-normal">Day 2</p>
                      </div>
                  </div>
                </div>
                </div>
                */}
            </div>
        </section>

    );
};
