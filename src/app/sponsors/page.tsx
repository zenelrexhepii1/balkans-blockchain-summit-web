"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { sponsorsMock } from "@/__mocks__/sponsorsPageMock";
import { Container } from "@/components/common";
import { classNames } from "@/utils";
import Link from "next/link";
import AOS from "aos";
import "@/app/scss/glowOnHoverCard.scss";
import { useHover } from "@/hooks";
import Image from "next/image";




export default function Page() {
    const {isHoverWithId,handleMouseEnterWidthId,handleMouseLeaveWithId} = useHover({initialNumber: 0});
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
        <div className="w-full relative">
            
            <Container className="px-6 lg:px-20">
                <div className="pt-40 lg:pt-55 text-center">
                    <h5 data-aos="fade-down" className="title_gradient font-boldpixels-custom text-6xl lg:text-8xl font-medium uppercase whitespace-normal">Sponsors</h5>
                </div>
                <section className="pt-24 w-full">
                    <div className="flex flex-col items-start gap-y-14 lg:gap-y-20 w-full">
                        <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl lg:text-5xl font-custom-regular font-medium leading-none whitespace-normal text-center">Title sponsor
                                </h4>
                            </div>
                            <div className={classNames("w-full",
                                sponsorsMock.titleSponsors.length === 1 || sponsorsMock.titleSponsors.length === 2 ? "flex justify-center items-center gap-2 w-full"
                                    : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                            )}>
                                {sponsorsMock.titleSponsors?.map((result: any, index) => (
                                    <div key={"elite-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.titleSponsors.length === 1 || sponsorsMock?.titleSponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className="no-underline outline-none z-100"
                                        
                                        >
                                            {result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/*
                        <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl lg:text-5xl font-custom-regular font-medium leading-none whitespace-normal">Diamond Sponsors
                                </h4>
                            </div>
                            <div className={classNames("w-full",
                                sponsorsMock.diamondSponsors.length === 1 || sponsorsMock.diamondSponsors.length === 2 ? "flex justify-center items-center flex-col lg:flex-row gap-4 w-full"
                                    : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                            )}>
                                  {sponsorsMock?.diamondSponsors?.map((result: any, index) => (
                                    <div key={"diamond-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.diamondSponsors.length === 1 || sponsorsMock?.diamondSponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className="no-underline outline-none z-100"
                                        >
                                            {result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        */}
                        {/*
                        <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl lg:text-5xl font-custom-regular font-medium leading-none whitespace-normal">
                                    Gold Sponsors
                                </h4>
                            </div>
                            <div
                                className={classNames("w-full",
                                    sponsorsMock.goldSponsors.length === 1 || sponsorsMock.goldSponsors.length === 2 ? "flex justify-center items-center flex-col lg:flex-row gap-4 w-full"
                                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                )}
                            >
                                 {sponsorsMock?.goldSponsors?.map((result: any, index) => (
                                    <div key={"diamond-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.goldSponsors.length === 1 || sponsorsMock?.goldSponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className="no-underline outline-none z-100"
                                        >
                                            {result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        */}
                        {/*
                        <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl lg:text-5xl font-custom-regular font-medium leading-none whitespace-normal">Community Sponsors
                                </h4>
                            </div>
                            <div
                                className={classNames("w-full",
                                    sponsorsMock.communitySponsors.length === 1 || sponsorsMock.communitySponsors.length === 2 ? "flex justify-center items-center flex-col lg:flex-row gap-4 w-full"
                                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                )}>
                                 {sponsorsMock?.communitySponsors?.map((result: any, index) => (
                                    <div key={"diamond-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.communitySponsors.length === 1 || sponsorsMock?.communitySponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className="no-underline outline-none z-100"
                                        >
                                            {result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        */}
                              <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl text-center lg:text-5xl font-custom-regular font-medium leading-none whitespace-normal">Platinum sponsors

                                </h4>
                            </div>
                            <div
                                className={classNames("w-full",
                                    sponsorsMock.platinumSponsors.length === 1 || sponsorsMock.platinumSponsors.length === 2 ? "flex justify-center items-center flex-col lg:flex-row gap-4 w-full"
                                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                )}
                            >
                               {sponsorsMock?.platinumSponsors?.map((result: any, index) => (
                                    <div key={"diamond-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.platinumSponsors.length === 1 || sponsorsMock?.platinumSponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className={classNames("no-underline outline-none z-100",
                                         //   result?.sponsor_id === 3 && "transform scale-[30%]"
                                        )}
                                      //  style={{zoom: result.sponsor_id == 3 ? "30%" : "normal"}}
                                        >
                                           {result?.image_sponsor ?
                                            <Image src={require("../../../public/images/PIXEL-LOGO-LightBG.png")} alt="" width={200} height={200} className="object-cover"/>
                                            :  result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                         <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl lg:text-5xl font-custom-regular text-center font-medium leading-none whitespace-normal">Silver sponsors

                                </h4>
                            </div>
                            <div
                                className={classNames("w-full",
                                    sponsorsMock.sliverSponsors.length === 1 || sponsorsMock.sliverSponsors.length === 2 ? "flex justify-center items-center flex-col lg:flex-row gap-4 w-full"
                                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                )}
                            >
                               {sponsorsMock?.sliverSponsors?.map((result: any, index) => (
                                    <div key={"diamond-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.sliverSponsors.length === 1 || sponsorsMock?.sliverSponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className={classNames("no-underline outline-none z-100",
                                         //   result?.sponsor_id === 3 && "transform scale-[30%]"
                                        )}
                                      //  style={{zoom: result.sponsor_id == 3 ? "30%" : "normal"}}
                                        >
                                           {result?.sponsor_id  === 3 ?
                                            <Image src={require("../../../public/images/PIXEL-LOGO-LightBG.png")} alt="" width={200} height={200} className="object-cover"/>
                                            :  result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                  
                        <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl lg:text-5xl font-custom-regular text-center font-medium leading-none whitespace-normal">
                                Community Sponsors
                                </h4>
                            </div>
                            <div
                                className={classNames("w-full",
                                    sponsorsMock.communitySponsors.length === 1 || sponsorsMock.communitySponsors.length === 2 ? "flex justify-center items-center flex-col lg:flex-row gap-4 w-full"
                                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                )}
                            >
                               {sponsorsMock?.communitySponsors?.map((result: any, index) => (
                                    <div key={"diamond-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.communitySponsors.length === 1 || sponsorsMock?.communitySponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className={classNames("no-underline outline-none z-100",
                                         //   result?.sponsor_id === 3 && "transform scale-[30%]"
                                        )}
                                      //  style={{zoom: result.sponsor_id == 3 ? "30%" : "normal"}}
                                        >
                                           {result?.sponsor_id  === 3 ?
                                            <Image src={require("../../../public/images/PIXEL-LOGO-LightBG.png")} alt="" width={200} height={200} className="object-cover"/>
                                            :  result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sponsors_wrapper w-full">
                            <div className="mb-10 lg:mb-14">
                                <h4 data-aos="fade-down" className="text-white text-4xl lg:text-5xl font-custom-regular text-center font-medium leading-none whitespace-normal">
                                Media Sponsors
                                </h4>
                            </div>
                            <div
                                className={classNames("w-full",
                                    sponsorsMock.mediaSponsors.length === 1 || sponsorsMock.mediaSponsors.length === 2 ? "flex justify-center items-center flex-col lg:flex-row gap-4 w-full"
                                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                )}
                            >
                               {sponsorsMock?.mediaSponsors?.map((result: any, index) => (
                                    <div key={"diamond-sponsors-" + index} className={classNames("relative border border-solid border-[#6d64ff]/80 h-55  flex flex-col items-center justify-center overflow-hidden",
                                        sponsorsMock?.mediaSponsors.length === 1 || sponsorsMock?.mediaSponsors.length === 2 ? "w-full lg:w-[400px]" : "w-full"
                                    )}
                                    onMouseEnter={() => handleMouseEnterWidthId(result?.sponsor_id)}
                                        onMouseLeave={handleMouseLeaveWithId}
                                    >
                                        <Link href={`${result.sponsor_linkUrl}`} target="_blank" passHref className={classNames("no-underline outline-none z-100",
                                         //   result?.sponsor_id === 3 && "transform scale-[30%]"
                                        )}
                                      //  style={{zoom: result.sponsor_id == 3 ? "30%" : "normal"}}
                                        >
                                           {result?.sponsor_id  === 3 ?
                                            <Image src={require("../../../public/images/PIXEL-LOGO-LightBG.png")} alt="" width={200} height={200} className="object-cover"/>
                                            :  result.sponsor_logo}
                                        </Link>
                                        {isHoverWithId === result?.sponsor_id && (
                                            <div className="w-full">
                                            <span className="glow_hover"/>
                                            <span className="backdrop_hover"/>
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        
        </div>
    )
}