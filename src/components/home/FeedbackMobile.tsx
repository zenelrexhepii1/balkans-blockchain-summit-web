"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { feedbackData } from "@/__mocks__/feedbackMock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedback_loop = Array.from({ length: 50 }, (_, i) => {
    return feedbackData[i % feedbackData.length];
});

export const FeedBackMobile: React.FC = () => {
    return (
            <div className="sponsors_container px-6">
                <div className="sponsors_track">
                    <div className="flex items-start gap-10">
                            {feedback_loop?.map((result,index) => (
                                <article key={"feedback-" + index} className="bg-black border border-solid border-[#A9A9A9] py-7 px-11 w-[350px] flex flex-col items-center gap-y-4">
                                    <div className="relative flex flex-col gap-y-0 w-full  h-[400px]">
                                        <Image
                                            src={result.feedback_image}
                                            alt=""
                                            fill
                                            className="w-full h-[400px]"
                                        />

                                    </div>
                                    <h4 className="text-white text-xl lg:text-2xl font-regular-custom leading-normal">
                                        {result.feedback_name}
                                    </h4>
                                </article>
                            ))}
                    </div>
                </div>
            </div>
    )
}