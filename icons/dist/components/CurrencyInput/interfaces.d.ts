import { InputHTMLAttributes, RefObject } from 'react';
import { FontWeight } from '../../util';
export interface InputContainerStyleProps {
    width?: string | number;
    variant?: InputVariantType;
    sizeType?: InputSizeType;
    mode?: InputModeType;
    fontWeight?: FontWeight;
    disabled?: boolean;
    focus?: boolean;
    value?: boolean;
    error?: boolean;
    filled?: boolean;
}
export type InputWrapperStyleProps = {
    width?: string | number;
    disabled?: boolean;
};
export type LabelStyleProps = {
    focus: boolean;
    disabled: boolean;
    error: boolean;
    icon: boolean;
    fontWeight?: FontWeight;
    size?: number;
};
export type InputModeType = 'light' | 'dark';
export type InputVariantType = 'default' | 'outlined';
export type InputSizeType = 'sm' | 'lg';
export interface CustomInputProps extends CustomInputStyleProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
    variant?: InputVariantType;
    mode?: InputModeType;
    /** determines the change value of the input */
    onChangeValue?: (values?: CurrencyInputOnChangeValues) => void;
    /** determine the text inside the input */
    label?: string;
    /** determines the className  */
    className?: string;
    /** determines the ref of the input */
    customRef?: RefObject<HTMLInputElement>;
    /** Value will always have the specified length of decimals */
    decimalLength?: number;
    /** Default value if not passing in value via props */
    defaultValue?: string | number;
    sizeType?: InputSizeType;
    helperText?: string;
    filled?: boolean;
    iconRight?: {
        icon: JSX.Element;
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
}
export interface CustomInputStyleProps {
    /** determines the padding of the input */ padding?: string;
    /** determines the error event of the input */
    error?: boolean;
    /** determines the icon of input */
    icon?: JSX.Element;
    /** determine the icon event */
    action?: {
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
        icon: JSX.Element;
    };
    /** determines the width of the input */
    width?: string;
    fontWeight?: FontWeight;
    focus?: boolean;
}
export type CurrencyInputOnChangeValues = {
    float: number | null;
    formatted: string;
    value: string;
};
