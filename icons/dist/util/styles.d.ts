import defaultTheme, { BorderSelector, ColorTypes, CustomDefaultTheme } from '../theme/theme';
type Core = keyof typeof defaultTheme.pallete.core;
type Neutral = keyof typeof defaultTheme.pallete.neutral;
type Feedback = keyof typeof defaultTheme.pallete.feedback;
export type IconSizeType = keyof typeof defaultTheme.iconSize;
export type BreakPointType = keyof typeof defaultTheme.breakPoint;
export type Color = `core.${Core}.${keyof ColorTypes}` | `neutral.${Neutral}.${keyof ColorTypes}` | `feedback.${Feedback}.${keyof ColorTypes}` | `#${string}`;
export declare function getColor(theme: CustomDefaultTheme, color: Color, defaultColor?: string): string;
export declare function getBorder(theme: CustomDefaultTheme, selected: BorderSelector, color: Color, defaultBorder?: string): string;
type SpacingKeys = keyof typeof defaultTheme.spacing;
export type Spacing = `${SpacingKeys}` | `${number}px` | `${number}rem` | `${number}%`;
export declare function getSpacing(theme: CustomDefaultTheme, spacing: Spacing, defaultValue?: string): string;
type PaddingKeys = keyof typeof defaultTheme.padding;
export type Padding = `${PaddingKeys}` | `${number}rem` | `${number}px`;
export type Margin = `${number}rem` | `${number}px`;
export type MarginList = `${Margin}` | `${Margin} ${Margin}` | `${Margin} ${Margin} ${Margin}` | `${Margin} ${Margin} ${Margin} ${Margin}`;
export declare function getPadding(theme: CustomDefaultTheme, padding: Padding[], defaultValue?: string): string;
type FontSizeKeys = keyof typeof defaultTheme.fontSize;
export type FontSize = `${FontSizeKeys}` | `${number}rem` | `${number}px`;
export declare function getFontSize(theme: CustomDefaultTheme, size: FontSize, defaultValue?: string): string;
type FontWeightKeys = keyof typeof defaultTheme.fontWeight;
export type FontWeight = `${FontWeightKeys}`;
export declare function getFontWeight(theme: CustomDefaultTheme, weight: FontWeight, defaultValue?: 400 | 500 | 600 | 700 | 800 | 900): number;
type LineHeightKeys = keyof typeof defaultTheme.lineHeight;
export type LineHeight = `${LineHeightKeys}` | `${number}rem` | `${number}px`;
export declare function getLineHeight(theme: CustomDefaultTheme, lineHeight: LineHeight, defaultValue?: string): string;
type BorderRadiusKey = keyof typeof defaultTheme.borderRadius;
export type BorderRadius = `${BorderRadiusKey}` | `${number}px` | `${number}%`;
export declare function getBorderRadius(theme: CustomDefaultTheme, value: BorderRadius, defaultValue?: string): string;
type ShadowKey = keyof typeof defaultTheme.shadow;
export type Shadow = `${ShadowKey}` | `${number}px ${string}`;
export declare function getShadow(theme: CustomDefaultTheme, value: Shadow, defaultValue?: string): string;
export declare function getIconSize(theme: CustomDefaultTheme, size: IconSizeType): string;
export declare function device(theme: CustomDefaultTheme, size: BreakPointType): string;
export declare enum ZIndex {
    OVERLAY = 99,
    MODAL = 100,
    NOTIFICATION = 6,
    TOOLTIP = 4,
    SELECT = 2,
    TABLE = 1,
    COMMON = 3,
    MENU = 5
}
export {};
