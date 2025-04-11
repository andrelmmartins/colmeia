import { PanelPosition, Theme } from './interfaces';
export declare const PanelOverflow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const PanelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    mode: Theme;
    width?: string | number;
    show: boolean;
    top: string;
    direction: PanelPosition;
}, never>;
export declare const PanelHeader: import("styled-components").StyledComponent<"header", import("styled-components").DefaultTheme, {
    mode: Theme;
}, never>;
export declare const HeaderContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const OverlayContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    open: boolean;
}, never>;
