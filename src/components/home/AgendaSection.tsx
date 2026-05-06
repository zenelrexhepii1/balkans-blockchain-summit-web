"use client"
import { agendaMock } from "@/__mocks__/agendaMock";
import React, { useState } from "react";
import { AgendaCard } from "../common/AgendaCard";
import { Container } from "../common";

export const AgendaSection = () => {
    return (
        <section id="agenda" className="w-full bg-[#011832] relative lg:min-h-screen py-8">
            <div className="text-center py-6">
                <h4 data-aos="fade-down" className="text-5xl title_gradient font-boldpixels-custom lg:text-8xl font-bold leading-normal uppercase">Agenda</h4>
            </div>
           <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agendaMock.map((result) => (
                      <AgendaCard
                         key={"agenda-card-" + result.id}
                         day_number={result.id}
                         agenda_name={result.agenda_name}
                         agenda_title={result.agenda_title}
                         agenda_description={result.agenda_description}
                      />
                  ))}
            </div>
           </Container>
        </section>
    )
}