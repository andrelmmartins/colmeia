import { Spacing } from '../../../../util';
import { InputDatePickerModeType } from '../../interfaces';
type CustomDatePickerContainerStyleProps = {
    open: boolean;
    mode?: 'dark' | 'default';
    width?: Spacing;
    height?: Spacing;
};
export declare const CustomDatePickerContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CustomDatePickerContainerStyleProps, never>;
export declare const CalendarWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CalendarItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderIcon: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    mode: InputDatePickerModeType;
}, never>;
export declare const CalendarHeader: import("styled-components").StyledComponent<"header", import("styled-components").DefaultTheme, {}, never>;
export declare const CalendarBody: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, {}, never>;
export declare const DaysOfWeekWrapper: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {}, never>;
export declare const DaysOfMonthWrapper: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {}, never>;
export declare const DaysOfMonthRow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const CalendarFooter: import("styled-components").StyledComponent<"footer", import("styled-components").DefaultTheme, {
    mode: InputDatePickerModeType;
}, never>;
export declare const ButtonsFooterWrapper: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {}, never>;
export {};
