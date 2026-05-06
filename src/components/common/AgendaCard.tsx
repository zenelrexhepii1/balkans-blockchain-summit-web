import { AgendaCardProps } from "@/interfaces";
import { classNames } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useState } from "react";

export const AgendaCard: FC<AgendaCardProps> = (props) => {
    const {day_number,agenda_name,agenda_title,agenda_description} = props;
    const [isHover,setIsHover] = useState<any | unknown>();
    const pathName = usePathname();

    const handleMouseEnter = (index: number) => {
        setIsHover(index);
    }

    const handleMouseLeave = () => {
        setIsHover(null);
    }

    return (
      <article className="w-full border border-solid border-[#6d64ff]/80"
      data-aos={pathName === "/agenda/" ? undefined : day_number === 1 && "fade-right" || day_number === 2 && "fade-left"}
      >
           <div className="w-full py-10 px-6">
                <div className="flex items-center justify-center w-full">
                     <h4 className="text-[300px] lg:text-[400px] title_gradient font-boldpixels-custom font-medium leading-none">{day_number}</h4>
                </div>
                <div className="flex flex-col items-start pt-6">
                      <h5 className="text-white/60 text-2xl lg:text-3xl font-medium font-regular-custom  leading-none mb-3">{agenda_name}</h5>
                      <h4 className="text-white font-regular-custom  text-4xl lg:text-6xl whitespace-normal leading-none mb-6">{agenda_title}</h4>
                      <p className="text-white/40 text-2xl font-medium leading-normal font-regular-custom ">{agenda_description}</p>
                      <div className="pt-7">
                      <Link href={`/agenda/${day_number}`} onMouseEnter={() => handleMouseEnter(day_number)} onMouseLeave={handleMouseLeave} passHref className={classNames("relative overflow-hidden z-100 flex py-2.5 px-8 block rounded-md border border-solid border-[#6d64ff]/80",
                        isHover ? "gradient_btn" : "bg-transparent"
                      )}>
                        <span className="text-base text-white font-regular-custom leading-normal whitespace-nowrap z-100">View More</span>
                        {isHover && (
                              <div className="w-full">
                              <span className="glow_hover"/>
                              <span className="backdrop_hover backdrop_hover-gradient"/>
                          </div>
                         )}
                      </Link>
                      </div>
                </div>
           </div>
      </article>
    )
}