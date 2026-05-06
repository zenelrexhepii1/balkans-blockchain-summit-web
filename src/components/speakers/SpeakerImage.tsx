/*
"use client"
import React, { FC, Suspense, useState } from "react";
import { classNames } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../common/Skeleton";
import { SpeakerImageProps } from "@/interfaces";
import { useImageLoader } from "@/hooks";

export const SpeakerImage: FC<SpeakerImageProps> = (props) => {
    const {
        speaker_id,
        speaker_image,
        speaker_name,
        title_color,
        speaker_position,
        linkUrl,
        speaker_description,
        disable_link = false,
        className,
    } = props;
    const hiddenSpeakerIds = [1, 3, 4, 6, 7, 9,10, 12, 13, 14, 16, 18, 19, 24, 25, 27];
    const isHidden = hiddenSpeakerIds.includes(speaker_id as any);
    const { isLoadingImage, handleOnLoadImage } = useImageLoader(true);
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={classNames(
            "w-full  relative flex items-center justify-center md:border-t md:border-t-[#8B8787] lg:border-b lg:border-b-[#8B8787]  hover:bg-[#1a1a1a] hover:z-50 transition-all duration-[0.3s] ease-in-out",
            speaker_id === 3 || speaker_id === 6 || speaker_id === 9 || speaker_id === 12 || speaker_id === 15 || speaker_id === 18 || speaker_id === 21 || speaker_id === 24 || speaker_id === 27 ? "md:border-r-0" : "md:border-r border-r-[#8B8787]"
        )}>
         
      {speaker_id === 1 || speaker_id === 3  || speaker_id ===6 || speaker_id ===7 || speaker_id === 9 || speaker_id === 10  || speaker_id === 12 || speaker_id === 13 || speaker_id === 15 || speaker_id === 16 || speaker_id === 18 || speaker_id === 19 || speaker_id === 21 || speaker_id === 22 || speaker_id === 24 || speaker_id === 25 || speaker_id === 27 ? (
        <></>
      ): (
        <span className="hidden md:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2
        w-3 h-3 bg-[#8B8787]">

        <span className="w-1.5 h-1.5 bg-[#8B8787]" />
      </span>
      )}

    

     {speaker_id === 1 || speaker_id === 3 || speaker_id === 4 || speaker_id === 6 || speaker_id === 7 || speaker_id === 9 || speaker_id === 10 || speaker_id === 12 || speaker_id === 13 || speaker_id === 15 || speaker_id === 16 || speaker_id === 18 || speaker_id === 19 || speaker_id === 21 || speaker_id === 22 || speaker_id === 24 || speaker_id === 25 || speaker_id === 27 ? (
        <></>
     ): (
        <span className="hidden md:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2
         w-3 h-3 bg-[#8B8787]">

<span className="w-1.5 h-1.5 bg-[#8B8787]" />
        </span>
     )} 
     
           <div className="w-full lg:w-[298px] py-6">
          
        
        
           <Link href={linkUrl as string} passHref className="no-underline w-full">
                {isLoadingImage && (<Skeleton className={classNames("relative mb-4 w-full aspect-[3/4] overflow-hidden",
                    className && className
                )} />)}
                <div className={classNames(`relative mb-4 w-full h-[400px] lg:h-[312px] overflow-hidden`,
                    isLoadingImage ? "hidden" : "block",
                    className && className
                )}>
                    <Image
                        src={speaker_image}
                        alt=""
                        fill
                        className={`w-full h-[400px] lg:h-[312px] object-cover ${className}`}
                        loading="eager"
                        onLoad={handleOnLoadImage}
                    />
                </div>
            </Link>
            {
                speaker_name && (
                    <h4 className={`text-2xl lg:text-[25px] md:-ml-6 font-medium font-venimg uppercase leading-normal mb-2 ${title_color}`}>{speaker_name}</h4>
                )
            }
            {
                speaker_position && (
                    <h4 className={`text-[#3175FD] text-lg w-full   md:-ml-6   leading-normal font-medium font-regular-custom mb-1`}>{speaker_position}</h4>
                )
            }
        
            {
                speaker_description && (
                    <p className="text-white text-sm w-full font-regular-custom leading-normal font-normal whitespace-normal">
                        {expanded ? speaker_description : speaker_description.slice(0, 120)}
                        <button type="button" className="bg-transparent outline-none" onClick={() => setExpanded(!expanded)}>
                            <span className="text-[#3175FD] pl-1 text-sm font-reagular-custom">See more</span>
                        </button>
                    </p>
                )
            }
                

           </div>

        </div>
    )
}
*/
// speaker_description comment 
"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/utils";
import { Skeleton } from "../common/Skeleton";
import { SpeakerImageProps } from "@/interfaces";
import { useImageLoader } from "@/hooks";

interface Props extends SpeakerImageProps {
  index: number; // 👈 shumë e rëndësishme
}

export const SpeakerImage: FC<Props> = ({
  index,
  speaker_image,
  speaker_name,
  speaker_position,
  title_color,
  linkUrl,
  className,
}) => {
  const { isLoadingImage, handleOnLoadImage } = useImageLoader(true);

  const col = index % 3;
  const isFirstCol = col === 0;
  const isLastCol = col === 2;

  return (
    <div
      className={classNames(
        "group relative w-full flex justify-center",
        "lg:border-b lg:border-r border-[#8B8787]",
        "lg:[&:nth-child(3n)]:border-r-0",
        "hover:bg-[#111] transition duration-300"
      )}
    >
    {/* LEFT NODE */}
{!isFirstCol && (
  <span className="hidden md:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#8B8787] z-20" />
)}

{/* RIGHT NODE */}
{!isLastCol && (
  <span className="hidden md:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#8B8787] z-20" />
)}

      <div className="relative z-10 w-full lg:w-[298px] py-6">
      <Link href={linkUrl as string} passHref className="no-underline w-full">
                {isLoadingImage && (<Skeleton className={classNames("relative mb-4 w-full h-[400px] overflow-hidden",
                    className && className
                )} />)} 
                {/*w-full*/}
                
                <div className={classNames(`relative mb-4 w-full h-[400px]`,
                    isLoadingImage ? "hidden" : "block",
                    className && className
                )}>
                    <Image
                        src={speaker_image}
                        alt=""
                        fill
                        className={`${className} w-full h-[400px] object-cover`}
                        loading="eager"
                        onLoad={handleOnLoadImage}
                    />
                    </div>
                *
               

            </Link>

            {
                speaker_name && (
                    <h4 className={`text-xl lg:text-[25px] md:-ml-6 font-medium font-venimg uppercase leading-normal mb-2 ${title_color}`}>{speaker_name}</h4>
                )
            }
            {
                speaker_position && (
                    <h4 className={`text-[#3175FD] text-base w-full md:-ml-6 leading-normal font-medium font-regular-custom mb-1`}>{speaker_position}</h4>
                )
            }
      </div>
    </div>
  );
};