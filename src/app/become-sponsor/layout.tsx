import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
    title: "BBS - Become Sponsor",
    description: "",
    keywords: [""],
    icons: {
      icon: "/images/bbs-favicon.png",
      shortcut: "/images/bbs-favicon.png",
      apple: "/images/bbs-favicon.png",
    },
    openGraph: {
      title: "BBS - Become Sponsor",
      description: "",
      url: "https://balkansblockchainsummit.com/",
      siteName: "Balkans Blockchain Summit",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "BBS - Become Sponsor",
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