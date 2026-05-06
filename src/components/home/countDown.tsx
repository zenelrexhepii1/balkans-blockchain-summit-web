"use client";
import { CountdownProps } from "@/interfaces";
import React from "react";

export const CountDown: React.FC<CountdownProps> = ({count_number,count_name}) => {
    return (
       <div className="bg-black/65 border border-solid border-white/20 block w-full lg:min-w-25 h-25">
          <div className="flex flex-col items-center justify-center h-25 gap-y-1">
              <h5 className="text-white text-3xl lg:text-4xl font-bold-custom font-bold leading-none">{typeof window !== "undefined" && count_number}</h5>
              <p className="text-sm lg:text-base font-medium leading-normal font-regular-custom text-white">{count_name}</p>
          </div>
       </div>
    )
}