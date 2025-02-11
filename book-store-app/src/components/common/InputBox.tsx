import React from "react";

import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputBoxProps<T> {
    id: string;
    name: keyof T; // means the {name:"rajan",age:24}, the key of the type i.e. for the value 24--the key is age.
    placeholder: string;
    label?: string;
    error?: string;
    type: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
    defaultValue?: any;
    register: (
        name: keyof T,
        options?: RegisterOptions | any
    ) => UseFormRegisterReturn;
}

const InputBox = <T,>({
    id,
    name,
    placeholder,
    value,
    defaultValue,
    label,
    error,
    type,
    disabled,
    onChange,
    register,
}: InputBoxProps<T>) => {
    return (
        <div className="flex flex-col gap-2">
            {label && <Label htmlFor={name as string}>{label}</Label>}
            <Input
                {...register(name)}
                id={id}
                type={type}
                name={name as string}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
            />

            {error ?? (
                <span className="text-destructive text-sm font-semibold">
                    **{error}
                </span>
            )}
        </div>
    );
};

export default InputBox;
