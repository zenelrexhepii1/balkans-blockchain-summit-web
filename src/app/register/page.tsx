"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { classNames } from "@/utils";
import { registerValidationSchema } from "@/utils/validations";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { SuccessModal } from "@/components/register/successModal";
import { useRouter } from "next/navigation";
import { RegisterData } from "@/interfaces/register_interfaces";
import emailjs from "@emailjs/browser";
import { FormEnums } from "@/enums/formEnums";
import { useHover } from "@/hooks";


export default function Page() {
    const [isRegisterSuccess,setIsRegisterSuccess] = useState<boolean>(false);
    const [isLoadingRegister,setIsLoadingRegister] = useState<boolean>(false);
    const [errorRegisterMessage,setErrorRegisterMessage] = useState<string>("");
    const router = useRouter();;
    const {isHover,handleMouseEnter,handleMouseLeave} = useHover({initialState: false});

    useEffect(() => {
        emailjs.init('O3gOkMac_6J2qrgc-');
    },[]);

    const handleSubmit = async (data: RegisterData) => {
        const {
            name,
            surname,
            email,
            twitter,
            telegram
        } = data;
      
        setIsLoadingRegister(true);
        try {
            const response = await fetch(`${process.env.REGISTER_API_URL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                    },
                    body: `name=${name}&surname=${surname}&email=${email}&twitter=${twitter}&telegram=${telegram}`,
                }
            ).then((res) => {
                if(!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            }).then(async (data) => {

                  if(data && data.result === "success") {
                    
                      setIsLoadingRegister(false);
                      setIsRegisterSuccess(true);

                      //email -> sent
                   //  await emailjs.send('service_kpai1lr','template_w2rc6ws',{
                    //    name: name,
                     //   recipient: email,
                     // })

                      const timer = setTimeout(() => {
                        setIsRegisterSuccess(false);
                        return router.push("/");
                      },2000);

                      return () => {
                        clearTimeout(timer);
                      }
                  }else if(data && data.result === "error") {
                    setErrorRegisterMessage(data?.msg);
                    setIsLoadingRegister(false);
                    setIsRegisterSuccess(false);
                  }
            });
            return response;
        }catch (error) {
            throw error;
        }
        
    };

    return (
        <div className="w-full min-h-screen relative overflow-scroll py-4">
            <div className="flex items-center flex-col justify-center min-h-screen">
                <div className="w-full lg:w-150 lg:border border-solid border-[#6d64ff] py-6 px-4 lg:px-6">
                    <div className="flex items-center flex-col justify-center w-full gap-y-10 pt-10">
                        <Link href="/" className="no-underline outline-none">
                            <div className="relative">
                                <Image
                                    src="/images/BBS-LOGO-WHITE-.png"
                                    alt=""
                                    width={150}
                                    height={150}
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                        <div className="text-center">
                            <h4 className="text-white text-2xl font-regular-custom font-medium leading-none mb-3">
                                Register now!
                            </h4>
                            <h5 className="text-[#777E90] text-base font-regular-custom font-medium leading-none">
                                First time here?
                            </h5>
                        </div>
                    </div>
                    <div className="w-full pt-10 pb-3">
                        <Formik
                            initialValues={{
                                name: "",
                                surname: "",
                                email: "",
                                twitter: "",
                                telegram: ""
                            }}
                            validationSchema={registerValidationSchema}
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
                                                    name="name"
                                                    id="name"
                                                    value={values.name}
                                                    placeholder="Name"
                                                    label="Name"
                                                    className={classNames("relative",errors.name && touched.name && "border-red-600 placeholder:text-red-600")}
                                                    error={errors.name && touched.name && errors.name as string}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="w-full">
                                                <Input
                                                    type="text"
                                                    name="surname"
                                                    id="surname"
                                                    value={values.surname}
                                                    placeholder="Surname"
                                                    label="Surname"
                                                    className={classNames("relative",errors.surname && touched.surname && "border-red-600 placeholder:text-red-600")}
                                                    error={errors.surname && touched.surname && errors.surname as string}
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
                                                className={classNames("relative",errors.email && touched.email && "border-red-600 placeholder:text-red-600")}
                                                error={errors.email && touched.email && errors.email as string}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input
                                                type="text"
                                                name="twitter"
                                                id="twitter"
                                                value={values.twitter}
                                                placeholder="X"
                                                label="X"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <Input
                                                type="text"
                                                name="telegram"
                                                id="telegram"
                                                value={values.telegram}
                                                placeholder="Telegram"
                                                label="Telegram"
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
                                                title="Register"
                                               // loading={isLoadingRegister && <span className="loader_register"/>}
                                                disabled={isLoadingRegister}
                                                isHoverGlow={isHover}
                                                className={classNames("w-full flex overflow-hidden relative",values.email !== ""  && "bg-[#307fff]",
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
            {isRegisterSuccess && <SuccessModal title="Registration Successful"/>}
        </div>
    )
}