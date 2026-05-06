"use client"
import React from "react";
import { VideoPlayerProps } from "@/interfaces";


export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    poster,
    controls = true,
    autoPlay = false,
    loop = false,
    className = "",
}) => {
    return (
        <div className={`relative w-full ${className}`}>
            <video
                src={src}
                poster={poster}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted
                playsInline
                preload="none"
                className="w-full h-full"
            />
        </div>
    );
};
