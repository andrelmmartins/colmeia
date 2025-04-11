import React from 'react';
import { InputDatePickerModeType } from '../../interfaces';
interface SelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode: InputDatePickerModeType;
    label: number;
    dateRange: {
        start?: Date;
        end?: Date;
    };
    yearRange: {
        start?: number;
        end?: number;
    };
    handleYearSelect: (year: number) => void;
}
declare const SelectYear: ({ mode, label, dateRange, handleYearSelect, yearRange, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export default SelectYear;
