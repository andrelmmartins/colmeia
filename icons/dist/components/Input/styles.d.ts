import { InputWrapperStyleProps, CustomInputProps as ComponentProps, InputVariantType, InputModeType } from './interfaces';
export declare const InputWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Pick<ComponentProps, "variant" | "disabled" | "fontSize" | "animateLabel" | "mode" | "error" | "iconLeft"> & {
    focus: boolean;
    value: boolean;
    animate: boolean;
}, never>;
export declare const InputDiv: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, InputWrapperStyleProps, never>;
export declare const CustomInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, ComponentProps, never>;
export declare const HelperContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Pick<ComponentProps, "variant" | "width" | "disabled" | "fontSize" | "mode" | "error" | "iconLeft"> & {
    focus: boolean;
    shrink: boolean;
}, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    background?: string;
    mode: InputModeType;
    variant: InputVariantType;
    hasValue: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}, never>;
