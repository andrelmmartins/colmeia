export type SkeletonVariant = 'light' | 'dark' | 'neutral';
export type SkeletonRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
export type SkeletonDimension = `${string}rem` | `${string}%`;
export interface SkeletonStyles {
    borderRadius?: SkeletonRadius;
    width?: SkeletonDimension;
    height?: SkeletonDimension;
}
export declare const SkeletonContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SkeletonStyles, never>;
export declare const SkeletonContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    variant: SkeletonVariant;
}, never>;
