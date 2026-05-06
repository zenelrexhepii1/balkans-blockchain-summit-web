"use client"
import { AgendaSection } from "@/components/home/AgendaSection";
import React, { useEffect } from "react";
import AOS from "aos";
import { useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter();
    /*
        useEffect(() => {
            AOS.init({
                duration: 1500,
            });
    
            return () => {
                AOS.refresh();
            }
    
        }, []);
        */

             useEffect(() => {
               router.replace('/');
                  //AOS
                     //  AOS.init({
                       //    duration: 1500,
                       //});
             },[router]);
    return (
       <div className="relative w-full pt-24">
        {/*
           <AgendaSection/>
           */}
       </div>
    )
}