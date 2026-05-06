"use client";
import React from "react";

const giveawayItems = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `10,000$ Giveaway`
  }));


export const GiveAwayBanner: React.FC = () => {
  return (
    <div className="w-full py-2 text-white bg-gradient-to-r from-[#7057FD] to-[#2679FD]">
           <div className="sponsors_container px-6">
                <div className="sponsors_track">
                    <div className="flex items-center gap-10 lg:gap-20">
                        {giveawayItems?.map((result) => (
                              <p key={"giveway-items-" + result.id} className="text-white text-sm lg:text-base font-custom-regular leading-normal">{result.name}</p>
                        ))}
                    </div>
                    </div>
                </div>
    </div>
  );
};

