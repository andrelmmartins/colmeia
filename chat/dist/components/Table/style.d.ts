import { Color, Spacing } from '../../util';
import { CellAligment } from './interfaces';
interface ThStyles {
    fixed?: boolean;
    left?: number;
    bgColor?: Color;
    alignment: CellAligment;
    minWidth: Spacing;
}
interface TdStyles {
    fixed?: boolean;
    left?: number;
    bgColor?: Color;
    iconField?: boolean;
}
export declare const Scroll: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    hasBoxShadow?: boolean;
}, never>;
export declare const TableContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    hasScroll?: boolean;
}, never>;
export declare const Table: import("styled-components").StyledComponent<"table", import("styled-components").DefaultTheme, {
    hasFixedCol?: boolean;
}, never>;
export declare const THead: import("styled-components").StyledComponent<"thead", import("styled-components").DefaultTheme, {
    bgColor: Color;
}, never>;
export declare const Th: import("styled-components").StyledComponent<"th", import("styled-components").DefaultTheme, ThStyles, never>;
export declare const Td: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, TdStyles, never>;
export declare const TdRowSpan: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, TdStyles, never>;
export declare const CollapseTdChildren: import("styled-components").StyledComponent<"td", import("styled-components").DefaultTheme, {
    isLast: boolean;
}, never>;
export declare const CollapseRow: import("styled-components").StyledComponent<"tr", import("styled-components").DefaultTheme, {}, never>;
export declare const TdData: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    secondValue?: boolean;
    alignment?: string;
    gap?: string;
}, never>;
export declare const Tr: import("styled-components").StyledComponent<"tr", import("styled-components").DefaultTheme, {
    showCollapsable?: boolean;
    hasClick?: boolean;
    disabled?: boolean;
}, never>;
export declare const TBody: import("styled-components").StyledComponent<"tbody", import("styled-components").DefaultTheme, {
    isLoading?: boolean;
    bgColor: Color;
}, never>;
export declare const FixedColShadow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Tooltip: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    top: number;
    left: number;
}, never>;
export declare const PaginationContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LeftContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const RightContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ButtonContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
