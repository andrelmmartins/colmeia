import { HTMLAttributes } from 'react';
import { Spacing } from '../../util';
export type ITabNotificationVariant = 'light' | 'dark';
export type ITabNotification = {
    label: string;
    description?: string;
    onClick?: () => void;
    isRead?: boolean;
};
export interface NotificationItemStyleProps {
    variant?: ITabNotificationVariant;
    isRead?: boolean;
    width?: Spacing;
    height?: Spacing;
    hasLink?: boolean;
}
export interface NotificationItemProps extends NotificationItemStyleProps, HTMLAttributes<HTMLDivElement> {
    variant?: ITabNotificationVariant;
    /** tabitem item icon */
    tabIcon?: JSX.Element;
    /** heading of TabNotification */
    heading?: string;
    /** link label of TabNotification */
    linkLabel?: string;
    emptyMessage?: string;
    /** items inside the TabNotification */
    notifications?: ITabNotification[];
    /** determines the className  */
    className?: string;
    badge?: boolean;
    handleMarkAllAsRead?: () => void;
}
export type MenuContainerStyleProps = {
    open?: boolean;
    width?: Spacing;
    height?: Spacing;
    variant?: ITabNotificationVariant;
};
