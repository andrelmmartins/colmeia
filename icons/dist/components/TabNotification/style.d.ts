import { Spacing } from '../../util';
import { ITabNotificationVariant, MenuContainerStyleProps, NotificationItemProps, NotificationItemStyleProps } from './interfaces';
export declare function getTextColorVariant(variant: ITabNotificationVariant): "neutral.high.pure" | "neutral.low.dark";
export declare function getParagraphColorVariant(variant: ITabNotificationVariant): "neutral.low.medium" | "neutral.high.dark";
export declare const NotificationContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const NotificationItemContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, NotificationItemStyleProps, never>;
export declare const TabIconContainer: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, NotificationItemStyleProps, never>;
export declare const MenuContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, MenuContainerStyleProps, never>;
export declare const HeadingContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    variant: ITabNotificationVariant;
}, never>;
export declare const NotificationsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    width: Spacing;
    variant: ITabNotificationVariant;
}, never>;
export declare const Notification: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const InfoContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BadgeContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, NotificationItemStyleProps, never>;
export declare const EmptyContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BadgeNotificationDiv: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, NotificationItemProps, never>;
