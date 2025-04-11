import { InputHTMLAttributes } from 'react';
import { Color } from '../../util';
export type CheckboxVariantType = 'default' | 'light';
export interface CheckboxStyleProps {
    variant?: CheckboxVariantType;
    disabled?: boolean;
    blocked?: boolean;
    color?: Color;
    error?: boolean;
}
export interface CheckboxProps extends CheckboxStyleProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'color'> {
    label?: string;
}
