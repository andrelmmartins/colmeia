/// <reference types="react" />
import { MarginList, Spacing } from '../../util';
export type NotificationSize = 'MD' | 'SM';
export type Alignment = {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
};
type positionProps = 'absolute' | 'fixed' | 'relative';
export type Link = {
    title: string;
    href: string;
};
export type NotificationVariant = 'highlight' | 'success' | 'helper' | 'warning' | 'skeleton' | 'default';
export interface NotificationIconProps extends CustomNotificationIconStyledProps {
    autoHideDuration?: number;
    className?: string;
    handleClose?: (event?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void;
    children?: React.ReactNode;
    slide?: boolean;
}
export interface CustomNotificationIconStyledProps {
    variant?: NotificationVariant;
    size?: NotificationSize;
    alignment?: Alignment;
    link?: Link;
    title: string;
    subtitle?: string;
    filled?: boolean;
    close?: boolean;
    open?: boolean;
    highlight?: boolean;
    maxWidth?: string;
    position?: positionProps;
    children?: React.ReactNode;
    slide?: boolean;
    margin?: MarginList;
    right?: Spacing;
    top?: Spacing;
    left?: Spacing;
    bottom?: Spacing;
    progress?: boolean;
    onColor?: boolean;
}
export type LinkProps = {
    title: string;
    href: string;
};
export {};
