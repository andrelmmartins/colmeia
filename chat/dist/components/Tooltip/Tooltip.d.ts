import React from 'react';
type ToolTipPosition = 'top' | 'bottom' | 'right' | 'left';
interface TooltipProps {
    /** determine the style of the tooltip */
    oncolor?: boolean;
    /** determines the position where the tooltip appears */
    position?: ToolTipPosition;
    /** element where the tooltip will detail */
    children: React.ReactNode;
    /** determine the text inside the tooltip */
    label: string;
    /** determines the width of the tooltip */
    width?: string;
    /** distance from child's top */
    top?: string;
    /** distance from the bottom of the child */
    bottom?: string;
    /** distance from child's left */
    left?: string;
    /** distance from child's right */
    right?: string;
    /** determines the className  */
    className?: string;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
