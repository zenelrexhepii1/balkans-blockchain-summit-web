import Image from "next/image";
import React, { FC } from "react";

export const Loading: FC = () => {
    return (
        <div className="bg-[#011832] w-full min-h-screen fixed top-0 z-10000">
            <div className="flex items-center flex-col gap-y-10 justify-center min-h-screen px-6 relative">
                <div className="relative z-100">
                    <Image
                        src="/images/BBS-Logo.png"
                        alt=""
                        width={300}
                        height={300}
                    />
                </div>
                <span className="loader_percentage font-boldpixels-custom z-[1200]" />
                <div className="glow-bg" />
                {/* DO NOT DELETE
                <div className="absolute bottom-6.5">
                    <p className="text-white text-3xl font-medium font-boldpixels-custom leading-normal flex items-center gap-2.5 whitespace-nowrap overflow-hidden">Loading <span className="dots_loading"/></p>
                </div>
                */}
            </div>
        </div>
    )
}