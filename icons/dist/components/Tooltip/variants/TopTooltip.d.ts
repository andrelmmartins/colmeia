/// <reference types="react" />
type ToolTipPosition = 'top' | 'bottom' | 'right' | 'left';
type CustomTooltipStyledProps = {
    oncolor: boolean;
    position: ToolTipPosition;
    children: React.ReactNode;
    label: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};
export declare const TopParentTooltipStyled: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<CustomTooltipStyledProps, import("styled-components").DefaultTheme>>;
export declare const TopTooltipStyled: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<CustomTooltipStyledProps, import("styled-components").DefaultTheme>>;
export {};
