export type OTPFieldFunctions = {
    clearValue?: () => void;
    clearValueAndSetErrorState?: () => void;
};
export type OTPVariant = 'LG' | 'MD' | 'SM';
export type OTPFieldProps = {
    variant?: OTPVariant;
    numberDigits?: number;
    dashPosition?: number;
    className?: string;
    type?: 'text' | 'number';
    error?: boolean;
    onChangeValue?: (value: string) => void;
    onFilled?: (value: string) => void;
    active?: boolean;
    value?: string;
    disabled?: boolean;
    autoFocus?: boolean;
};
