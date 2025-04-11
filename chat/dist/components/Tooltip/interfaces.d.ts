/// <reference types="react" />
export type ToolTipPosition = 'top' | 'bottom' | 'right' | 'left';
export interface TooltipProps {
    oncolor?: boolean;
    position?: ToolTipPosition;
    children: React.ReactNode;
    label: string;
    width?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    className?: string;
}
export type CustomTooltipStyledProps = {
    oncolor: boolean;
    position: ToolTipPosition;
    children: React.ReactNode;
    label: string;
    width: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};
