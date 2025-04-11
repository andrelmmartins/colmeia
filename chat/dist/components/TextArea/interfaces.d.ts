import { RefObject, TextareaHTMLAttributes } from 'react';
export type InputInputTextAreaVariantType = 'default' | 'dark';
export interface CustomInputTextAreaStyleProps {
    /** determines the padding of the input */
    padding?: string;
    /** determines the error event of the input */
    error?: boolean;
    /** determines the type of the input */
    variant?: InputInputTextAreaVariantType;
    /** determines the width of the input */
    width?: string;
    /** determines the height of the input */
    height?: string | number;
    /** determines the min height of the input */
    minHeight?: string | number;
    /** determines the max height of the input */
    maxHeight?: string | number;
}
export interface CustomInputTextAreaProps extends CustomInputTextAreaStyleProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'width'> {
    /** determines the change value of the input */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** determines the helperText of the input */
    helperText?: string;
    /** determine the text inside the input */
    label?: string;
    /** determine the mask text inside the input */
    className?: string;
    /** shows the field size at the bottom of component */
    customRef?: RefObject<HTMLTextAreaElement>;
}
export type HeadStyleProps = {
    disabled: boolean;
};
export type InputWrapperStyleProps = {
    value: boolean;
    focus: boolean;
    disabled: boolean;
    error: boolean;
    variant: InputInputTextAreaVariantType;
    width?: string | number;
    height?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
};
export type HelperStyleProps = {
    variant: InputInputTextAreaVariantType;
};
export interface InputContainerStyleProps {
    width?: string | number;
}
