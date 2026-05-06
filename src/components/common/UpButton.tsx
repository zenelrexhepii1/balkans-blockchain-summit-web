"use client";
import UpIcon from "@/assets/svg/UpIcon";
import React, { FC, useEffect, useState } from "react";

export const UpButton: FC = () => {
    const [isShownButton,setIsShownButton] = useState(false);
    const [backgroundUpButton,setBackgroundUpButton] = useState(false);

    useEffect(() => {
      { typeof window !== "undefined" && window.addEventListener("scroll",handleShowUpButton) }
        return () => {
            window.removeEventListener("scroll",handleShowUpButton)
        }
    },[]);

    const handleShowUpButton = () => {
        const section_id = document.getElementById("about") as any;
        const rect = section_id?.getBoundingClientRect();

        const top: any = section_id?.offsetTop;
        const bottom = top + section_id?.offsetHeight;
        const scroll = window.scrollY;

        if(typeof window !== "undefined" && window.scrollY >= 200) {
            setIsShownButton(true);
     
        }else {
            setIsShownButton(false);
        }
    }

    const handleScrollToTop = () => {
        if(typeof window !== "undefined") {
        window.scrollTo({top: 0,behavior: "smooth"})
        }
    }

    return (
        <>
          {isShownButton && (
                        <div className="fixed bottom-6 right-6">
                        <button type="button" className="bg-[#2679FD] w-12 h-12 rounded-full flex flex-col items-center justify-center outline-none cursor-pointer" 
                        onClick={handleScrollToTop}
                        >
                            <UpIcon fill="#fff"/>
                        </button>
                    </div>
                    )}
        </>
    )
}