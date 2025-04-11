import { DefaultTheme } from 'styled-components';
import { ButtonEvent, ButtonStyleProps, ButtonWrapperProps, IconContainerStyleProps } from './interfaces';
export declare function getButtonEventLabel(event: ButtonEvent, eventLabel: {
    [key: string]: string;
}): string | undefined;
export declare const IconContainer: import("styled-components").StyledComponent<"div", DefaultTheme, IconContainerStyleProps, never>;
export declare const ButtonWrapper: import("styled-components").StyledComponent<"div", DefaultTheme, ButtonWrapperProps, never>;
export declare const CustomButton: import("styled-components").StyledComponent<"button", DefaultTheme, ButtonStyleProps, never>;
