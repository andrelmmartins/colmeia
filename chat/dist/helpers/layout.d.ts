import { Color } from '../util/styles';
declare const Layout: {
    Base: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        background?: Color;
    }, never>;
    Row: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        gap?: string;
        backgroundColor?: string;
    }, never>;
    Column: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
        gap?: string;
        backgroundColor?: string;
    }, never>;
};
export default Layout;
