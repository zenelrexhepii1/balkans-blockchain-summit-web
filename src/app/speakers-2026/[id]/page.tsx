import React from "react";
import { speakersMock } from "@/__mocks__";
import { Container } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "@/utils";
import { Metadata } from "next";
import { SpeakerImage } from "@/components/speakers/SpeakerImage";
export const dynamic = "force-static";
import "@/app/scss/sponsorsStyle.scss"
import { speakersLastYear } from "@/__mocks__/speakersLastYearMock";


export async function generateStaticParams() {
  return speakersMock.map((result) => ({
    id: result.speaker_id?.toString()
  }))
}

export async function generateMetadata({ params }: { params: { id: number } }): Promise<Metadata> {
  const { id } = await params;
  const speaker_data = speakersMock.find((speaker) => speaker.speaker_id == id);

  return {
    title: `Speakers 2026 | ${speaker_data?.speaker_name}`,
    description: speaker_data?.speaker_description,
    /* do not delete
    openGraph: {
     title: speaker_data?.speaker_name,
     description: speaker_data?.speaker_description,
     images: [`${speaker_data?.speaker_image}`]
    }
     */
  }
}

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  const getSpeakerData = speakersMock.find((speaker) => speaker?.speaker_id == id as any) as any;


  return (
    <div className="relative w-full min-h-screen flex items-center justify-center flex-col pt-35 lg:pt-40 px-5 lg:px-14 py-5">
      <div className="py-10">
          <h4 className="text-white font-venimg font-bold uppercase text-5xl  lg:text-[64px]">speaker</h4>
      </div>
      <div className="w-full lg:px-20">
        <div className="lg:border border-[#8B8787] w-full relative">
          <span className="hidden md:block absolute top-0 left-[48.2%] translate-x-1/2 -translate-y-1/2
         w-3 h-3 bg-[#8B8787]">

            <span className="w-1.5 h-1.5 bg-[#8B8787]" />
          </span>

          <span className="hidden md:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2
         w-3 h-3 bg-[#8B8787]">

            <span className="w-1.5 h-1.5 bg-[#8B8787]" />

          </span>
          <span className="hidden md:block absolute -bottom-3 left-[48.2%] translate-x-1/2 -translate-y-1/2
         w-3 h-3 bg-[#8B8787]">

            <span className="w-1.5 h-1.5 bg-[#8B8787]" />

          </span>
          <span className="hidden md:block absolute -bottom-3 right-0 translate-x-1/2 -translate-y-1/2
         w-3 h-3 bg-[#8B8787]">

            <span className="w-1.5 h-1.5 bg-[#8B8787]" />

          </span>
          <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-6 overflow-hidden">
            <div className="relative w-full lg:border-r border-[#8B8787] flex lg:items-center lg:justify-center">
              <div className="py-6 w-full lg:w-max">
              <Image
                  src={getSpeakerData?.speaker_image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full lg:w-[437px] h-[450px] lg:h-[542px] lg:object-cover"
                />
                </div>
            </div>
            <div className="content relative w-full lg:w-[507px] mx-auto z-1000">
              <h4 className="text-white text-[48px] font-venimg font-medium leading-normal mb-2">
                {getSpeakerData?.speaker_name}
              </h4>
              <p className="text-white text-sm lg:text-base font-regular-custom font-normal">
                {getSpeakerData?.speaker_description?.slice(0,695)}
              </p>
              <div className="pt-6 pointer-events-auto">
                <div className="flex items-center gap-7">
                {getSpeakerData?.speaker_socials?.map((result: any) => (
                    <Link href={`${result.linkUrl}`} key={"speaker-socials-" + result.id} target="_blank"
                    className="pointer-events-auto"
                    >
                        {result.icon}
                    </Link>
                ))}
                </div>
            </div>
              <div className="glow-bg-speaker hidden lg:block pointer-events-none" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}