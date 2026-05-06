"use client"
import React, { useEffect } from "react";
import { sliderMock } from "@/__mocks__";
import { Container } from "@/components/common";
import { countDownMapping } from "@/utils";
import "@/app/scss/carousel.scss"
import { SpeakersSection } from "@/components/home/SpeakersSection";
import { ScrollDownButton } from "@/components/common/ScrollDownButton";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AboutSection } from "@/components/home";
import AOS from "aos";
import { useRouter } from "next/navigation";

const Slider = dynamic(() => import("react-slick"), { ssr: false });


export default function Page() {
  const router = useRouter();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
      }

      useEffect(() => {
        router.replace('/');
           //AOS
              //  AOS.init({
                //    duration: 1500,
                //});
      },[router]);


    return (
        <div className="relative w-full">
          {/*
            <div className="w-full h-[800px] lg:h-screen overflow-hidden">
        <Container className="absolute top-0 z-100 flex flex-col items-center justify-center h-[600px] lg:h-screen">
          <div className="pt-60 lg:pt-55">
            <h4 className="text-5xl text-center lg:text-left lg:text-8xl mb-4 title_gradient font-boldpixels-custom uppercase font-bold lg:leading-24">
              Event Information
            </h4>
          </div>
          </Container>
          <Slider {...settings}>
          {sliderMock?.map((result) => (
            <div key={"slider-" + result.id} className="w-full h-[800px] lg:h-screen"
            >
              <div className="slide_home relative h-screen"
                style={{
                backgroundImage: `url(${result.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center /cover",
                backgroundSize: "100% 100vh"
              }}
              />
            </div>
          ))}
        </Slider>

      </div>
            <div className="py-8 lg:pt-20">
            <AboutSection/>
            </div>
            <div className="py-8">
                <SpeakersSection/>
            </div>
            */}
        </div>
    )
}