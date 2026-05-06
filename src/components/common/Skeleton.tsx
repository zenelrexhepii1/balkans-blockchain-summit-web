import React from "react";

export const Skeleton: React.FC<{className?: string}> = ({className}) => {
    return (
        <div
        className={`w-full bg-transparent border border-solid border-[#8B8787] animate-pulse ${className} flex flex-col items-center justify-center`}
       >
        <span className="loader_skeleton"/>
       </div>
    )
}