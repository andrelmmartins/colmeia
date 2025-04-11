import React from 'react';
export interface PanelProps {
    /** determine the moder of the panel */
    mode?: Theme;
    /** determine the header of the panel */
    header?: string;
    /** determine the photo of the panel */
    open: boolean;
    /** control the panel close event */
    handleClose: () => void;
    /** determines the className  */
    className?: string;
    /** determines the children elemnts  */
    children?: React.ReactNode;
    /** determines the top  */
    top?: string;
    /** determines the width  */
    width?: string | number;
    direction?: PanelPosition;
    iconCloseRounded?: boolean;
    noClose?: boolean;
    hasOverlay?: boolean;
}
export type IconPosition = 'left' | 'right';
export type PanelPosition = 'left' | 'right';
export type Theme = 'light' | 'dark';
export interface PanelItemStyleProps {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    itemTheme?: Theme;
    selected?: boolean;
}
export interface IconProps {
    iconPosition?: IconPosition;
    itemTheme?: Theme;
}
export interface PanelItemProps extends PanelItemStyleProps {
    label: string;
    onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
    theme?: Theme;
}
