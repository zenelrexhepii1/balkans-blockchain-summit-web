import React, { useState } from "react"

interface UseHoverProps {
    initialState?: boolean;
    initialNumber?: number;
}

export const useHover = ({initialState,initialNumber = 0}: UseHoverProps) => {
    const [isHover,setIsHover] = useState(initialState);
    const [isHoverWithId,setIsHoverWithId] = useState(initialNumber);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const handleMouseEnterWidthId = (id: number) => {
        setIsHoverWithId(id);
    }

    const handleMouseLeaveWithId = () => {
        setIsHoverWithId(0);
    }

    return {
        isHover,
        isHoverWithId,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseEnterWidthId,
        handleMouseLeaveWithId
    }
}