import { CalendarDays } from './components/Calendar';
import { CalendarDay, LanguageType } from './interfaces';
export declare const i18nCancelButton: (language: LanguageType) => string;
export declare const i18nSaveButton: (language: LanguageType) => string;
export declare const i18nResetButton: (language: LanguageType) => string;
export declare const i18nFilterHeader: (language: LanguageType) => string;
export declare const getFilterLabel: (filter: string, language: LanguageType) => any;
export declare const convertValueToInternationalDate: (value: string) => string;
export declare const checkIsAfterLimitDate: (currentDate: Date, startDate: Date | undefined, maxDaysLimit: number | undefined) => boolean;
export declare const formatDateInternationalization: (language: LanguageType, filter: string, date: string) => string;
export declare const applyDateMask: (value: string, hasRange: boolean) => string;
export declare const isValidDateRange: (inputValue: string, dateRange: {
    start?: Date;
    end?: Date;
}, hasRange: boolean) => boolean;
export declare const isValidDate: (dateString: string, hasRange: boolean) => boolean;
export declare const convertValueToDate: (date: string, hasRange: boolean) => Date;
export declare const getPreviousMonth: (date: string, hasRange: boolean) => string;
export declare const getNextMonth: (date: string, hasRange: boolean) => string;
export declare const getCalendarDays: (value: string, date: string, dateRange: {
    start?: Date;
    end?: Date;
}, hasRange: boolean, maxDaysLimit?: number) => CalendarDays;
export declare const displayCalendar: (value: string, dateInput: string, dateRange: {
    start?: Date;
    end?: Date;
}, hasRange: boolean, maxDaysLimit?: number) => CalendarDay[][];
export declare const getMonth: (date: string, hasRange: boolean, language: LanguageType) => string;
export declare const getYearNumber: (date: string, hasRange: boolean) => number;
export declare const getDaysOfWeek: (language: LanguageType) => string[];
export declare const isInversedDate: (startDate: string, endDate: string) => boolean;
