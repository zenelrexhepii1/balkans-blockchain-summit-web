import { Metadata } from "next";
import React, { ReactNode } from "react";
//styles
import "@/app/scss/sponsorsStyle.scss"


export const metadata: Metadata = {
    title: "BBS - Sponsors",
    description: "BBS - Sponsors",
    keywords: [""],
    icons: {
      icon: "/images/bbs-favicon.png",
      shortcut: "/images/bbs-favicon.png",
      apple: "/images/bbs-favicon.png",
    },
    openGraph: {
      title: "BBS - Sponsors",
      description: "",
      url: "https://balkansblockchainsummit.com/",
      siteName: "Balkans Blockchain Summit",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "BBS - Sponsors",
      description: "",
      images: [""],
      creator: "@balkansbs",
    },
    robots: {
      index: true,
      follow: true,
    }  
  };

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className="w-full min-h-screen bg-black">
            {children}
        </div>
    )
}