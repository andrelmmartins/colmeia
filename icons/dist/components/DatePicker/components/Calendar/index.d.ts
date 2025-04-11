import React, { RefObject } from 'react';
import { InputDatePickerModeType, LanguageType } from '../../interfaces';
interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
    mode: InputDatePickerModeType;
    openState: boolean;
    wrapperRef: RefObject<HTMLDivElement>;
    value: string;
    language: LanguageType;
    hasRange: boolean;
    hasFilter: boolean;
    inputValue: string;
    hasSavedDate: boolean;
    dateRange: {
        start?: Date;
        end?: Date;
    };
    yearRange: {
        start?: number;
        end?: number;
    };
    maxDaysLimit?: number;
    onDaySelect: (day: string, filter?: string) => void;
    handleSaveClick: () => void;
    handleSavedDate: (saved: boolean) => void;
}
export type CalendarDays = {
    day: number;
    month: number;
    year: number;
    date: Date;
    isInRange?: boolean;
    isStartDay?: boolean;
    isEndDay?: boolean;
    isCurrentDay?: boolean;
    isDisabled?: boolean;
}[];
declare const Calendar: ({ mode, openState, inputValue, wrapperRef, value, language, onDaySelect, hasSavedDate, hasRange, hasFilter, handleSaveClick, dateRange, yearRange, handleSavedDate, maxDaysLimit, ...props }: CalendarProps) => import("react/jsx-runtime").JSX.Element;
export default Calendar;
