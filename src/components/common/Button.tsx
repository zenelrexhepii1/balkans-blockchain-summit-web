"use client"
import { ButtonProps } from "@/interfaces";
import { classNames } from "@/utils";
import React from "react";
import "@/app/scss/gradientButton.scss"
import "@/app/scss/glowOnHoverCard.scss";


export const Button: React.FC<ButtonProps> = (props) => {
    const {type,id,className,title,loading,isHoverGlow,onClick,onMouseEnter,onMouseLeave} = props;

    return (
        <button type={type} id={id} className={classNames(`w-full bg-[#6d64ff] cursor-pointer px-6 py-3 text-xl font-bold-custom font-medium uppercase leading-normal whitespace-normal ${className}`,
        loading ? "flex items-center gap-3 justify-center" : "block"
        )}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
        >
            <span className="z-100 text-center min-w-full">{title}</span>
            {loading && loading}
            {isHoverGlow && (
                       <div className="w-full">
                       <span className="glow_hover"/>
                       <span className="backdrop_hover backdrop_hover-gradient"/>
                   </div>
            )}
        </button>
    )
}