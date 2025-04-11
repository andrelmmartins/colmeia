import { InputHTMLAttributes } from 'react';
export type RadioVariantType = 'default' | 'light' | 'square';
export interface RadioInputStyles {
    variant?: RadioVariantType;
    disabled?: boolean;
    checked?: boolean;
}
export interface RadioInputProps extends RadioInputStyles, InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    className?: string;
}
