import React from "react";
import { agendaMock } from "@/__mocks__/agendaMock";
import { Container } from "@/components/common";
import { Metadata } from "next";


export async function generateStaticParams() {
  return agendaMock.map((result) => ({
    id: result.id.toString()
  }))
}

export async function generateMetadata({params}: {params: {id: number}}): Promise<Metadata> {
    const {id} = await params;
    const agenda_data = agendaMock.find((agenda) => agenda.id == id);
 
    return {
      title: `Agenda | ${agenda_data?.agenda_title}`,
      description: agenda_data?.agenda_description,
      openGraph: {
       title: agenda_data?.agenda_title,
       description: agenda_data?.agenda_description,
      }
    }
 }

export default async function Page({ params }: { params: { id: number } }) {
    const {id} = await params;
    const agenda_data = agendaMock.find((agenda) => agenda.id == id);

    return (
        <div className="w-full pt-52 rleative">
             <div className="flex flex-col lg:flex-row gap-y-6 items-center justify-between lg:max-w-7xl mx-auto pt-5 lg:pt-6">
                  <h4 className="text-white text-3xl lg:text-5xl font-regular-custom font-bold">{agenda_data?.agenda_title}</h4>
                  <p className="text-white text-base font-regular-custom leading-normal">{agenda_data?.agenda_description}</p>
             </div>
             <div className="flex items-center justify-center  w-full pt-14 lg:pt-20">
                  <h4 className="text-white text-[100px] lg:text-[150px] flex gap-3 items-center font-regular-custom whitespace-normal leading-normal">{agenda_data?.agenda_name.replace(/1/g,"").trim()}
                  <span className="font-boldpixels-custom title_gradient leading-none">{agenda_data?.id}</span>
                  </h4>
             </div>
            <Container className="py-10">
                  <div className="flex flex-col items-start gap-7">
                       {agenda_data?.data.map((result: any) => (
                            <div key={"agenda_details-" + result?.agenda_id}
                            className="w-full border border-solid border-[#6d64ff]/80 px-6 lg:px-24 py-6 lg:py-10"
                            >
                                 <div className="w-full">
                                      <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-24">
                                           <div className="flex flex-col items-center lg:items-start gap-y-4">
                                               <h5 className="text-white text-3xl lg:text-5xl font-regular-custom leading-none whitespace-normal">{result.agenda_monthName}</h5>
                                               <p className="text-white/60 text-2xl font-regular-custom leading-none whitespace-normal">{result.agenda_dayName}</p>
                                               <p className="text-white/60 text-2xl font-regular-custom leading-none whitespace-normal">{result.agenda_time}</p>                                               
                                           </div>
                                           <h5 className="text-3xl text-white lg:text-6xl font-regular-custom leading-normal whitespace-normal">{result?.agenda_title}</h5>
                                      </div>
                                 </div>
                            </div>
                       ))}
                  </div>
            </Container>
        </div>
    )
}