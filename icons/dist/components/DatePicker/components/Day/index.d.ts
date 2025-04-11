import React from 'react';
import { InputDatePickerModeType } from '../../interfaces';
interface DayProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode: InputDatePickerModeType;
    day: number;
    selected?: boolean;
    isCurrentDay?: boolean;
    isCurrentMonth?: boolean;
    isInRange?: boolean;
    isStartDay?: boolean;
    isEndDay?: boolean;
    isDisabled?: boolean;
}
declare const Day: ({ mode, day, onClick, selected, isCurrentMonth, isCurrentDay, isInRange, isStartDay, isDisabled, isEndDay, ...props }: DayProps) => import("react/jsx-runtime").JSX.Element;
export default Day;
