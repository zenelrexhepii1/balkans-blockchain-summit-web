"use client"
import React from "react";
import "@/app/scss/carousel.scss"
import dynamic from "next/dynamic";
import "@/app/scss/glowOnHoverCard.scss"
import { HeroSection } from "@/components/home/HeroSection";
import { FeedbackSection } from "@/components/home/FeedBackSection";
import { TimeLineSection } from "@/components/home/TimeLineSection";
import { MeetSpeakersSection } from "@/components/home/MeetSpeakersSection";
import { SponsorsSection } from "@/components/home/SponsorsSection";
import RightIcon from "@/assets/svg/RightIcon";
import Image from "next/image";
import { feedbackData } from "@/__mocks__/feedbackMock";
import { useCarousel } from "@/hooks/useCarosuel";
import LeftIcon from "@/assets/svg/LeftIcon";
import { RegisterBanner } from "@/components/home/RegisterBanner";
import { AllSpeakersLastYear } from "@/components/home/AllSpeakersLastYear";
import { FeedBackMobile } from "@/components/home/FeedbackMobile";


const VideoPlayer = dynamic(() => {
  return import("@/components/common/VideoPlayer").then((component) => component.VideoPlayer)
},{ssr: false});


export default function Home() {
      const {
          visibleItems,
          next,
          prev,
          isStart,
          isEnd,
        } = useCarousel(feedbackData, 1); // show 3 at a time
  return (
    <div className="w-full relative">
      <div className="pt-20">
      <HeroSection/>
      </div>
      <FeedbackSection/>
        <div className="relative bottom-[170px] lg:bottom-[290px] pt-6 lg:pt-0">
        <div className="px-11 lg:px-40 flex items-center justify-center flex-col-reverse lg:flex-row w-full gap-y-7 lg:gap-y-6 overflow-hidden">
                      <div className="w-full flex flex-col gap-y-6">
                            <h5 className="text-white text-[40px] lg:text-[64px] font-venimg leading-[110%] mb-2 lg:mb-0">Feedbacks<br className=""/>From 2025</h5>
                            <p className="text-white text-sm w-full relative lg:top-10 lg:w-[420px] lg:text-base font-medium leading-normal font-regular-custom">
                            The 2025 edition left a strong impression on speakers, partners, and participants, highlighting Kosovo’s hospitality, energy, and growing role in the Web3 space.
                            These moments helped turn BBS from a local event into a regional movement with international attention.
                            </p>
                      </div>
                      <div className="flex items-center flex-col lg:flex-row gap-y-6 py-6 lg:py-0 lg:gap-11 w-full">
                          <button type="button" onClick={prev} disabled={isStart} className="bg-black hidden lg:flex border border-solid border-[#A9A9A9] w-[68px] h-[68px]  items-center justify-center outline-none cursor-pointer">
                              <RightIcon/>
                          </button>
                          <div className="hidden border border-[#A9A9A9] w-full lg:w-[419px] h-[579px] bg-black lg:flex items-center justify-center flex-col">
                              {visibleItems?.map((result) => (
                                  <div  key={"feedback-" + result.feedback_id} className="flex flex-col items-center gap-y-3 w-[300px] lg:w-full">
                                 <div className="relative flex flex-col gap-y-0 w-full lg:w-[350px]  h-[462px]">
                                    <Image
                                      src={result.feedback_image}
                                      alt=""
                                      fill
                                      className="w-full lg:w-[350px] h-[462px]"
                                    />
                                 
                                 </div>
                                 <h4 className="text-white text-xl lg:text-2xl font-regular-custom leading-normal">
                                     {result.feedback_name}
                                    </h4>
                                 </div>
                              ))}
                          </div>
                          <button type="button" onClick={next} disabled={isEnd} className="bg-black hidden lg:flex border border-solid border-[#A9A9A9] w-[68px] h-[68px]  items-center justify-center outline-none cursor-pointer">
                              <LeftIcon/>
                          </button>
                          <div className="flex lg:hidden">
                            <FeedBackMobile/>
                          </div>
                      </div>
                  </div>
        </div>

     <SponsorsSection/>
        <TimeLineSection/>
        <MeetSpeakersSection/>
      
        <VideoPlayer
        src="/videos/bbs-video.mp4"
        poster="/images/video_bg.png"
        controls={true}
        autoPlay={true}
        loop={true}
      />
      <RegisterBanner/>
      <AllSpeakersLastYear/>
    </div>
  );
}
