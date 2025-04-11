import { Spacing } from '../../util';
import { TabAccountStyleProps } from './interfaces';
export declare const AccountContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const AccountItemContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TabAccountStyleProps, never>;
export declare const TabContainer: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, TabAccountStyleProps, never>;
export declare const TabIconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    openState: boolean;
}, never>;
type MenuContainerStyleProps = {
    open?: boolean;
    width?: Spacing;
    height?: Spacing;
    variant: TabAccountStyleProps['variant'];
    marginTop?: string;
};
export declare const MenuContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, MenuContainerStyleProps, never>;
export declare const HeadingContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ActionButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, TabAccountStyleProps, never>;
export declare const AccountsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TabAccountStyleProps, never>;
export declare const DescriptionAccount: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TabAccountStyleProps, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ButtonIcon: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const InfoContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
