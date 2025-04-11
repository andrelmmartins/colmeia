import { InputHTMLAttributes } from 'react';
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
}
