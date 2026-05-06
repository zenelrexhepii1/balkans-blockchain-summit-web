import { InputProps } from "@/interfaces";
import React from "react";


export const Input: React.FC<InputProps> = (props) => {
    const {
        type,
        label,
        value,
        name,
        placeholder,
        error,
        className,
        disabled,
        onChange
    } = props;
    return (
        <div className="input_wrapper w-full">
              {label && (
                 <label htmlFor={label} className="text-white w-full text-sm lg:text-base font-regular-custom font-medium leading-normal mb-2 inline-block">
                    {label}
                 </label>
              )}
              <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full text-white placeholder:text-[#777E90] border border-solid border-[#6d64ff] px-6 py-3 text-base font-medium font-regular-custom leading-normal outline-none focus:outline-none ${className}`}
                onChange={onChange}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 font-medium font-regular-custom leading-none whitespace-normal">{error}</p>
              )}
        </div>
    )
}