import React from "react"
import "@/app/scss/successModal.scss"


export const SuccessModal: React.FC<{title: string}> = ({title}) => {
    return (
        <div className="bg-black/80 w-full min-h-screen fixed top-0">
            <div className="flex items-center justify-center min-h-screen w-full">
                <div className="bg-black border border-solid border-[#6d64ff] w-170 py-18 rounded-xl">
                    <div className="flex flex-col items-center justify-center gap-y-10">
                        <div className="w-25 h-25 flex flex-col items-center justify-center border-3 border-[#ddd]/60 rounded-full">
                            <svg
                                className="checkmark"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                        <h4 className="text-white text-2xl lg:text-4xl font-bold-custom font-medium uppercase">
                            {title}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}