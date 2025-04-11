import { Props as SearchProps } from './variants/Search';
import { Option } from './variants/Select';
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    open: boolean;
    value: boolean;
    startClosed: boolean;
    filled: boolean;
    error: boolean;
    disabled: boolean;
    alignRight: boolean;
    mode: string;
    focus: boolean;
}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    autoComplete: "off";
} & {
    disabled: boolean;
    error: boolean;
    mode: string;
}, "autoComplete">;
export declare const IconButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    open: boolean;
    pointer?: boolean;
    startClosed: boolean;
    alignRight: boolean;
    mode: string;
    disabled: boolean;
}, never>;
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Pick<SearchProps, "mode" | "error">, never>;
export declare const Dropdown: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    options: Option[];
    mode: string;
}, never>;
export declare const Loader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IconShape: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
