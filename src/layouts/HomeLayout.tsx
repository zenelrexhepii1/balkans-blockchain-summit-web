"use client";
import React, { FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname, useRouter } from "next/navigation";
import { classNames } from "@/utils";
import { Loading } from "@/components/common/Loading";
import { HomeLayoutProps } from "@/interfaces";
import Error from "next/error";

const NO_LOADER_ROUTES = [
    "/about/",
    "/speakers/",
    "/agenda/",
    "/sponsors/",
    "/register/",
    "/become-sponsor/"
]

export const HomeLayout: FC<HomeLayoutProps> = ({children}) => {
    const pathName = usePathname();
    const router = useRouter();


    const cleanPath = pathName.endsWith("/") ? pathName : pathName + "/" as string;

    if(NO_LOADER_ROUTES.includes(pathName) || cleanPath.startsWith("/speakers-2025/") || cleanPath.startsWith("/speakers-2026/") || cleanPath.startsWith("/agenda/")) {
        return children;
    }

    const [isShownLoader,setIsShownLoader] = useState(true);

 
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });

        handleStartLoading();

        return () => {
            AOS.refresh();
        }
      
    },[pathName]);



    const handleStartLoading = () => {
        setIsShownLoader(true);

        const timer = setTimeout(() => {
          setIsShownLoader(false);
          window.scrollTo({top: 0,behavior: "smooth"})
        },3000);// 3000

        return () => {
            clearTimeout(timer);
        }
    }

    if(isShownLoader) {
        return <Loading/>
    }

    return (
        <div className={classNames("w-full",pathName === "/sponsors" ? "bg-black" : "bg-transparent")}>
            {children}
        </div>
    )
}