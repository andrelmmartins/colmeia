import React, { InputHTMLAttributes, RefObject } from 'react';
import { BeforeMaskedStateChangeStates, InputState } from 'react-input-mask';
export type InputVariantType = 'default' | 'outlined';
export type InputModeType = 'default' | 'dark';
export type HeadingSizeVariants = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export interface CustomInputStyleProps {
    /** determines the padding of the input */
    padding?: string;
    /** determines the error event of the input */
    error?: boolean;
    /** determines the iconLeft of input */
    iconLeft?: JSX.Element;
    /** determines the iconRight of input */
    iconRight?: {
        icon: JSX.Element;
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
    /** determines the type of the input */
    variant?: InputVariantType;
    mode?: InputModeType;
    /** determines the width of the input */
    width?: string;
}
export interface CustomInputProps extends CustomInputStyleProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
    /** determines the change value of the input */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** determines the helperText of the input */
    helperText?: string;
    /** determine the text inside the input */
    label?: string;
    /** determine the placeholder inside the input */
    placeholder?: string;
    /** determine the mask text inside the input */
    mask?: string;
    /** determine the maskPlaceholder text inside the input */
    maskPlaceholder?: string;
    /** determines whether or not the mask will be removed */
    alwaysShowMask?: boolean;
    /** determines the className  */
    className?: string;
    /** shows the field size at the bottom of component */
    showMaxLength?: boolean;
    beforeMaskedStateChange?: (states: BeforeMaskedStateChangeStates) => InputState;
    customRef?: RefObject<HTMLInputElement>;
    fontSize?: HeadingSizeVariants;
    fontWeight?: 'regular' | 'semiBold' | 'bold';
    animateLabel?: boolean;
}
export type InputWrapperStyleProps = {
    value: boolean;
    focus: boolean;
    disabled: boolean;
    error: boolean;
    mode: InputModeType;
    variant: InputVariantType;
    width?: string | number;
    animateLabel?: boolean;
};
export interface InputContainerStyleProps {
    width?: string | number;
    variant: InputVariantType;
    mode: InputModeType;
}
