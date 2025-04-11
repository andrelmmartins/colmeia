import React, { InputHTMLAttributes } from 'react';
export type RadioVariantType = 'default' | 'light' | 'square';
export interface RadioInputStyles {
    /** determines the type of the Radio */
    variant?: RadioVariantType;
    /** determines if the Radio is disabled */
    disabled?: boolean;
    children?: React.ReactNode;
}
export interface RadioInputProps extends RadioInputStyles, InputHTMLAttributes<HTMLInputElement> {
    /** determine the text inside the Radio */
    label: string;
    /** determine the text of Radio */
    name: string;
    /** determines the className  */
    className?: string;
}
declare const RadioInput: React.FC<RadioInputProps>;
export default RadioInput;
