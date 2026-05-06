import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "BBS - Agenda",
    description: "",
    keywords: [""],
    icons: {
      icon: "/images/bbs-favicon.png",
      shortcut: "/images/bbs-favicon.png",
      apple: "/images/bbs-favicon.png",
    },
    openGraph: {
      title: "BBS - Agenda",
      description: "",
      url: "https://balkansblockchainsummit.com/",
      siteName: "Balkans Blockchain Summit",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "BBS - Agenda",
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
        <div className="w-full">
            {children}
        </div>
    )
}