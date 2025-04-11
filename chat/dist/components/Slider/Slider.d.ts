import React, { InputHTMLAttributes } from 'react';
export interface SliderStyleProps {
    /** determines the padding of the input */
    padding?: string;
    /** determines the error event of the input */
    error?: boolean;
}
export interface SliderProps extends SliderStyleProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
    /** determines the helperText of the input */
    helperText?: string;
    /** determine the text inside the input */
    label?: string;
    /** determines the className  */
    className?: string;
    /** determines the change value of the input */
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** determines the ref of the input */
    customRef?: React.RefObject<HTMLInputElement>;
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    variant?: 'default' | 'primary';
    min?: number;
    max?: number;
    minLabel?: JSX.Element | string;
    maxLabel?: JSX.Element | string;
    noinput?: boolean;
    labelPosition?: 'top' | 'center';
    increaseFrom?: number;
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
