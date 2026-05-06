import { FeedbackProps } from "@/interfaces";
import { classNames } from "@/utils";
import Image from "next/image";
import React from "react";


export const FeedBackCard: React.FC<FeedbackProps> = ({ size, feedback_image, feedback_name }) => {
    return (
            <article className="relative">
                <div className="flex flex-col itmes-center lg:items-start">
                    <div className="relative overflow-hidden w-full h-97.5"
                    >

                        <Image
                            src={feedback_image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="pt-3">
                        <h5 className="text-white text-xl font-medium font-regular-custom">{feedback_name}</h5>
                    </div>
                </div>
            </article>
    )
}