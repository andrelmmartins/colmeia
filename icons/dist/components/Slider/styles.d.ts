/// <reference types="react" />
import { CustomDefaultTheme } from '../../theme/theme';
type LabelProps = {
    marginRight?: string;
    marginLeft?: string;
    disabled?: boolean;
    labelPosition: string;
};
type RangeSliderProps = {
    disabled?: boolean;
    variant?: string;
    increaseFrom?: number;
};
export declare const getActiveColor: (theme: CustomDefaultTheme, variant: string, value?: number, increaseFrom?: number) => string;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    labelPosition: string;
}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, LabelProps, never>;
export declare const RangeSlider: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, RangeSliderProps, never>;
export declare const CustomInput: import("styled-components").StyledComponent<import("react").FC<import("../Input").CustomInputProps>, import("styled-components").DefaultTheme, {}, never>;
export declare const ContainerSlider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
