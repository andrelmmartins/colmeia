interface IBreakPoint {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}
interface IFontSize {
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    display: string;
    giant: string;
}
interface IFontHeight {
    default: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}
interface IIconSize {
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    display: string;
    giant: string;
}
interface IBorderRadius {
    none: string;
    sm: string;
    md: string;
    lg: string;
    pill: string;
    circular: string;
}
interface IOpacity {
    semiOpaque: string;
    intense: string;
    medium: string;
    light: string;
    semiTransparent: string;
}
interface IBorderWidth {
    none: string;
    hairline: string;
    thin: string;
    thick: string;
    heavy: string;
}
export interface ISpacing {
    quarck: string;
    nano: string;
    micro: string;
    xxxs: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    huge: string;
    giant: string;
}
interface IPadding {
    quarck: string;
    nano: string;
    micro: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
}
export interface IShadow {
    l1: string;
    l2: string;
    l3: string;
    l4: string;
    select: string;
}
interface IFontWeight {
    regular: number;
    semiBold: number;
    bold: number;
}
export interface ColorTypes {
    pure: string;
    light: string;
    medium: string;
    dark: string;
}
export interface IColor {
    background: ColorTypes;
    core: {
        primary: ColorTypes;
        secondary: ColorTypes;
        highlight: ColorTypes;
    };
    neutral: {
        hairline: ColorTypes;
        medium: ColorTypes;
        low: ColorTypes;
        high: ColorTypes;
    };
    feedback: {
        warning: ColorTypes;
        helper: ColorTypes;
        success: ColorTypes;
    };
}
interface IBorder {
    hairline: string;
    thin: string;
    thick: string;
    heavy: string;
}
export type BorderSelector = 'hairline' | 'thin' | 'thick' | 'heavy';
export type FontFamily = 'Open Sans' | 'Work Sans';
export type CustomDefaultTheme = {
    breakPoint: IBreakPoint;
    fontSize: IFontSize;
    lineHeight: IFontHeight;
    iconSize: IIconSize;
    borderRadius: IBorderRadius;
    borderWidth: IBorderWidth;
    opacity: IOpacity;
    spacing: ISpacing;
    padding: IPadding;
    pallete: IColor;
    fontWeight: IFontWeight;
    shadow: IShadow;
    border: IBorder;
};
declare const defaultTheme: CustomDefaultTheme;
export default defaultTheme;
