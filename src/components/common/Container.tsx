import { ContainerProps } from "@/interfaces";
import React, { FC } from "react";

export const Container: FC<ContainerProps> = ({children,className}) => {
    return (
        <div className={`${className} w-full`}>
            {children}
        </div>
    )
}