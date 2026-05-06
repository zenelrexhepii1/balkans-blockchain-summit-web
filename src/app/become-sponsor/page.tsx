"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { classNames } from "@/utils";
import { sponsorsValidationsSchema } from "@/utils/validations";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SponsorsData } from "@/interfaces/sponsors_interfaces";
import { SuccessModal } from "@/components/register/successModal";
import { FormEnums } from "@/enums/formEnums";
import emailjs from "@emailjs/browser";
import { useHover } from "@/hooks";


export default function Page() {
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
    const [isLoadingRegister, setIsLoadingRegister] = useState(false);
    const [errorRegisterMessage, setErrorRegisterMessage] = useState("");
    const router = useRouter();
    const {isHover,handleMouseEnter,handleMouseLeave} = useHover({initialState: false});

    useEffect(() => {
        emailjs.init('O3gOkMac_6J2qrgc-');
    },[]);


    const handleSubmit = async (data: SponsorsData) => {
        const {
            firstName,
            lastName,
            email,
            companyName
        } = data;
        setIsLoadingRegister(true);
        try {
            const response = await fetch(`${process.env.SPONSORS_API_URL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                    },
                    body: `firstName=${firstName}&lastName=${lastName}&email=${email}&companyName=${companyName}`,
                }
            ).then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            }).then(async(data) => {
                if (data && data.result === FormEnums.SUCCESS) {

                    setIsLoadingRegister(false);
                    setIsRegisterSuccess(true);

                       //email -> sent
                    //email -> sent
                 //   await emailjs.send('service_oq46iqa','template_je3z14e',{
                  //      name: firstName,
                   //     recipient: email,
                    //  })

                    const timer = setTimeout(() => {
                        setIsRegisterSuccess(false);
                        return router.push("/");
                    }, 2000);

                    return () => {
                        clearTimeout(timer);
                    }
                } else if (data && data.result === FormEnums.ERROR) {
                    setErrorRegisterMessage(data?.msg);
                    setIsLoadingRegister(false);
                    setIsRegisterSuccess(false);
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    };
    return (
        <div className="w-full min-h-screen relative">
            <div className="flex items-center flex-col justify-center min-h-screen">
                <div className="w-full lg:w-150 lg:border border-solid border-[#6d64ff] py-6 px-6">
                    <div className="flex items-center flex-col justify-center w-full gap-y-10 pt-10">
                        <Link href="/" className="no-underline outline-none">
                            <div className="relative">
                                <Image
                                    src="/images/BBS-LOGO-WHITE-.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </Link>
                        <div className="text-center">
                            <h4 className="text-white text-2xl font-regular-custom font-medium leading-none mb-3">
                                Become Sponsor
                            </h4>
                        </div>
                    </div>
                    <div className="w-full pt-10 pb-3">
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                companyName: ""
                            }}
                            validationSchema={sponsorsValidationsSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col items-start gap-y-5">
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="w-full">
                                                <Input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    value={values.firstName}
                                                    placeholder="First Name"
                                                    label="First Name"
                                                    className={classNames("relative", errors.firstName && touched.firstName && "border-red-600 placeholder:text-red-600")}
                                                    error={errors.firstName && touched.firstName && errors.firstName as string}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="w-full">
                                                <Input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    value={values.lastName}
                                                    placeholder="Last Name"
                                                    label="Last Name"
                                                    className={classNames("relative", errors.lastName && touched.lastName && "border-red-600 placeholder:text-red-600")}
                                                    error={errors.lastName && touched.lastName && errors.lastName as string}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={values.email}
                                                placeholder="Email"
                                                label="Email"
                                                className={classNames("relative", errors.email && touched.email && "border-red-600 placeholder:text-red-600")}
                                                error={errors.email && touched.email && errors.email as string}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                type="text"
                                                name="companyName"
                                                id="companyName"
                                                value={values.companyName}
                                                placeholder="Company Name"
                                                label="Company Name"
                                                className={classNames("relative", errors.companyName && touched.companyName && "border-red-600 placeholder:text-red-600")}
                                                error={errors.companyName && touched.companyName && errors.companyName as string}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    {errorRegisterMessage && (
                                        <div className="my-2 w-full">
                                            <p className="text-red-600 text-sm font-custom-regular whitespace-normal font-normal">
                                                {errorRegisterMessage}
                                            </p>
                                        </div>
                                    )}
                                    <div className="w-full pt-10 relative">
                                        <Button
                                            type={isLoadingRegister ? "button" : "submit"}
                                            title="Send"
                                          //  loading={isLoadingRegister && <span className="loader_register" />}
                                          //  loading={<span className="custom_form_loading"/>}
                                            disabled={isLoadingRegister}
                                            isHoverGlow={isHover}
                                            className={classNames("w-full flex overflow-hidden", values.email !== "" && "bg-[#307fff]",
                                                isLoadingRegister && "bg-[#307fff]/60 cursor-not-allowed pointer-events-none",
                                                isHover && "gradient_btn"
                                            )}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        />
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            {isRegisterSuccess && <SuccessModal title="successful!" />}
        </div>
    )
}