import { FontWeight } from '../../util';
import { Props as ComponentProps } from './interfaces';
import { HeadingSizeVariants } from '../Typography/Heading/interfaces';
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Pick<ComponentProps, "disabled" | "size" | "mode" | "filled" | "withoutBottomLine"> & {
    hasValue: boolean;
    error: boolean;
    focus: boolean;
    value: boolean;
}, never>;
export declare const IconButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, Pick<ComponentProps, "disabled"> & {
    mode: string;
    hasValue: boolean;
}, never>;
interface ComponentPropsSelect {
    disabled?: boolean;
    error?: boolean;
    smallSize: boolean;
}
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    autoComplete: "off";
} & ComponentPropsSelect & {
    mode?: string;
    fontSize?: HeadingSizeVariants;
    fontWeight?: FontWeight;
    smallSize?: boolean;
}, "autoComplete">;
export declare const getTextColorDropDown: (props: any) => string;
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Pick<ComponentProps, "disabled" | "mode" | "error" | "fullWidth"> & {
    value?: boolean;
}, never>;
export declare const Dropdown: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Pick<ComponentProps, "mode" | "options"> & {
    focused: boolean;
}, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Pick<ComponentProps, "disabled">, never>;
export {};
