import { TabItemStyleProps } from './interfaces';
export declare const HeadingPadding: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TabItemWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const TabItemContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TabItemStyleProps, never>;
type MenuContainerStyleProps = {
    open?: boolean;
    heading: boolean;
    columns: number;
    totalItems?: number;
    marginTop?: string;
    borderRadius?: string;
};
export declare const MenuContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, MenuContainerStyleProps, never>;
export declare const ItemsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, MenuContainerStyleProps, never>;
export declare const TabContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
