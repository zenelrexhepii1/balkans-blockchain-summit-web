"use client";
import React from "react";

export const ScrollDownButton: React.FC = () => {

    const handleScrollDown = () => {
        return window.scrollTo({
            top: 1000,
            behavior: "smooth",
          })
    }

    return (
        <div className="flex items-center flex-col justify-center w-full lg:absolute left-0 right-0 lg:bottom-6 pt-20 lg:pt-0">
        <span className="home_loading" onClick={handleScrollDown}/>
    </div>
    )
}