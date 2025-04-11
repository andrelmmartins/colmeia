import { ButtonHTMLAttributes } from 'react';
import { ParagraphInterfaces } from '../Typography';
import { BorderRadius, Color, FontWeight, IconSizeType } from '../../util';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'tertiary' | 'danger' | 'success';
export type ButtonSize = 'SM' | 'MD' | 'default';
export type ButtonEvent = 'default' | 'info' | 'warning' | 'error' | 'success';
export type ButtonWrapperProps = {
    variant: ButtonVariant;
    oncolor: boolean;
    size?: ButtonSize;
    padding?: string;
    width?: string;
    height?: string;
    borderRadius?: BorderRadius;
    hoverBackground?: string;
    disabled?: boolean;
    hasBoxShadow?: boolean;
};
export interface OptionalButtonStyleProps {
    padding?: string;
    margin?: string;
    background?: string;
    color?: Color;
    hoverColor?: string;
    hoverBackground?: string;
    focusBorder?: string;
    onlyIcon?: boolean;
    hasBoxShadow?: boolean;
    width?: string;
    height?: string;
    borderRadius?: BorderRadius;
    textAlign?: string;
    display?: string;
    fontSize?: ParagraphInterfaces.ParagraphSizeVariants;
    fontWeight?: FontWeight;
}
export interface ButtonProps extends OptionalButtonStyleProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    /** determines the type of the button */
    variant?: ButtonVariant;
    /** determine the size of the button */
    size?: ButtonSize;
    oncolor?: boolean;
    /** determine the text inside the button */
    label?: string;
    /** determines if the button is disabled */
    disabled?: boolean;
    /** determines if the button is loading */
    isLoading?: boolean;
    /** determines the icon inside the button */
    icon?: JSX.Element;
    iconLeft?: JSX.Element;
    /** determines the icon size inside the button */
    iconSize?: IconSizeType;
    /** determine the button event */
    event?: ButtonEvent;
    /** determines the onclick of the button */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** determine the text after the event */
    eventLabel?: {
        success: string;
        warning: string;
        error: string;
    };
    /** determine the id of the button */
    testId?: string;
    /** determines the className  */
    className?: string;
}
export interface ButtonStyleProps extends OptionalButtonStyleProps {
    disabled: boolean;
    oncolor: boolean;
    isLoading: boolean;
    onlyIcon: boolean;
    event: ButtonEvent;
    size: ButtonSize;
    hasLabel?: boolean;
}
export interface IconContainerStyleProps {
    hasLabel: boolean;
    color?: Color | string;
    iconSize?: IconSizeType;
    iconLeft?: JSX.Element;
}
