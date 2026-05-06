"use client";
import { classNames } from "@/utils";
import { FC, useEffect, useRef, useState } from "react";

export const CustomCursor: FC = () => {
    const [isVisible,setIsVisible] = useState<boolean>(false);
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    let mouseX: number = 0;
    let mouseY: number = 0;
    let circleX: number = 0;
    let circleY: number = 0;

    useEffect(() => {
        if (typeof window !== "undefined" && "ontouchstart" in window) return;

        const hoverElements = document.querySelectorAll("a, button");

        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        animate();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);

            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    const animate = () => {
        circleX += (mouseX - circleX) * 0.12;
        circleY += (mouseY - circleY) * 0.12;

        if (circleRef.current) {
            circleRef.current.style.left = `${circleX}px`;
            circleRef.current.style.top = `${circleY}px`;
        }

        requestAnimationFrame(animate);
    };


    const moveCursor = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        

        if(!isVisible) {
            setIsVisible(true);
        }

        if (dotRef.current) {
            dotRef.current.style.left = `${mouseX}px`;
            dotRef.current.style.top = `${mouseY}px`;
           
           // dotRef.current.style.transform = 
          //`translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        }  

    };

    const handleMouseEnter = () => {
        circleRef.current?.classList.add("scale-150", "bg-white/20");
    };

    const handleMouseLeave = () => {
        circleRef.current?.classList.remove("scale-150", "bg-white/20");
    };

    const handleMouseDown = () => {
        circleRef.current?.classList.add("scale-75");
    };

    const handleMouseUp = () => {
        circleRef.current?.classList.remove("scale-75");
    };


    return (
        <>
            <div
                ref={dotRef}
               className={classNames("pointer-events-none fixed z-9999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference",
                isVisible ? "opacity-100" : "opacity-0"
               )}
            />

            <div
                ref={circleRef}
                className={classNames("pointer-events-none fixed z-9998 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white transition-all duration-200 ease-out mix-blend-difference",
                 isVisible ? "opacity-100" : "opacity-0"
                )}
            />
        </>
    );
}
