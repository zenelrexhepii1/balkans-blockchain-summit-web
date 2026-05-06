import React from "react";
import type { Metadata } from "next";
import "./globals.css";

import { CustomCursor, Footer, Navbar } from "@/components/common";
import { UpButton } from "@/components/common/UpButton";

//styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/scss/glowText.scss"
import "@/app/scss/gradientButton.scss";
import "@/app/scss/loaderUi.scss";
import dynamic from "next/dynamic";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";


const HomeLayout = dynamic(() => {
  return import("@/layouts/HomeLayout").then((component) => component.HomeLayout)
})

export const metadata: Metadata = {
  title: "Balkans Blockchain Summit",
  description: "Beyond Borders. On Chain",
  keywords: ["Balkans","Blockchain","Summit"],
  authors: [{ name: "Balkans Blockchain Summit" }],
  icons: {
    icon: "/images/bbs-favicon.png",
    shortcut: "/images/bbs-favicon.png",
    apple: "/images/bbs-favicon.png",
  },
  openGraph: {
    title: "Balkans Blockchain Summit",
    description: "Beyond Borders. On Chain",
    url: "https://balkansblockchainsummit.com/",
    siteName: "Balkans Blockchain Summit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balkans Blockchain Summit",
    description: "Beyond Borders. On Chain",
    creator: "@balkansbs",
  },
  robots: {
    index: true,
    follow: true,
  }    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  /* bg-[#011832]*/
  return (
    <html lang="en" className="w-full overflow-x-hidden">
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1293749698753449');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* No-JS fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1293749698753449&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body
        className="bg-black w-full overflow-x-hidden m-0">
        <main className="w-full relative">
    
          <HomeLayout>
            <Navbar />
            {children}
          <div className="pt-20">
          <Footer/> 
          </div>
            <UpButton /> 
          </HomeLayout>
        </main>
        <GoogleAnalytics gaId="G-0K5DFB6VXC"/>
      </body>
    </html>
  );
}
