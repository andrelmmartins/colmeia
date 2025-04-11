import { InputHTMLAttributes, RefObject } from 'react';
export type InputDatePickerModeType = 'default' | 'dark';
export type InputDatePickerVariant = 'default' | 'outlined';
export type LanguageType = 'pt-BR' | 'en-US' | 'es-ES';
export interface CustomDatePickerStyleProps {
    padding?: string;
    error?: boolean;
    hasWarning?: boolean;
    mode?: InputDatePickerModeType;
    variant?: InputDatePickerVariant;
    width?: string;
    height?: string | number;
    disabled?: boolean;
    value?: string;
}
export interface CustomDatePickerProps extends CustomDatePickerStyleProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
    value?: string;
    /** determines the change value of the input */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** determines the warningText of the input */
    warningMessage?: string;
    /** determines the errorText of the input */
    errorMessage?: string;
    /** determine the text inside the input */
    label?: string;
    /** determine the mask text inside the input */
    className?: string;
    /** determine the language of the input */
    language?: LanguageType;
    /** shows the field size at the bottom of component */
    customRef?: RefObject<HTMLInputElement>;
    hasRange?: boolean;
    hasFilter?: boolean;
    onlyIcon?: boolean;
    dateRange?: {
        start?: Date;
        end?: Date;
    };
    yearRange?: {
        start?: number;
        end?: number;
    };
    maxDaysLimit?: number;
    hasClearTag?: boolean;
    tagPosition?: 'left' | 'right';
    onDateSelect?: (data: {
        startDate?: string;
        endDate?: string;
        date?: string;
        filter?: string;
    }) => void;
    errorCapture?: (error: boolean) => void;
}
export type HeadStyleProps = {
    disabled: boolean;
};
export type InputWrapperStyleProps = {
    value: boolean;
    focus: boolean;
    disabled: boolean;
    error: boolean;
    mode: InputDatePickerModeType;
    variant: InputDatePickerVariant;
    width?: string | number;
    height?: string | number;
    onlyIcon?: boolean;
};
export type HelperStyleProps = {
    mode: InputDatePickerModeType;
};
export interface InputContainerStyleProps {
    width?: string | number;
}
export type CalendarDay = {
    day: number;
    month: number;
    year: number;
    value: string;
    isCurrentMonth: boolean;
    isCurrentDay: boolean;
    isInRange: boolean;
    isStartDay: boolean;
    isEndDay: boolean;
    isDisabled: boolean;
};
export type DayStyleProps = {
    mode: InputDatePickerModeType;
    selected?: boolean;
    isCurrentMonth: boolean;
    isCurrentDay: boolean;
    day: number;
    isInRange: boolean;
    isStartDay: boolean;
    isEndDay: boolean;
};
