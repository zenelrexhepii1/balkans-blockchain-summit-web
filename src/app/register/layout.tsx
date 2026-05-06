import { Metadata } from "next"
import React, { FC, ReactNode } from "react"

export const metadata: Metadata = {
    title: "BBS - Register",
    description: "",
    keywords: [""],
    icons: {
      icon: "/images/bbs-favicon.png",
      shortcut: "/images/bbs-favicon.png",
      apple: "/images/bbs-favicon.png",
    },
    openGraph: {
      title: "BBS - Register",
      description: "",
      url: "https://balkansblockchainsummit.com/",
      siteName: "Balkans Blockchain Summit",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "BBS - Register",
      description: "",
      images: [""],
      creator: "@balkansbs",
    }, 
    robots: {
      index: true,
      follow: true,
    }  
  };

export default function RegisterLayout({children}: {children: ReactNode}) {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}