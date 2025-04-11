import React from 'react';
import { ParagraphInterfaces } from '../Typography';
import { Color } from '../../util';
export type StatusCellVarian = 'error' | 'pending' | 'success';
export type StatusCellProps = {
    label?: string;
    status?: StatusCellVarian;
    size?: ParagraphInterfaces.ParagraphSizeVariants;
    color?: Color;
    heightBadge?: string;
    widthBadge?: string;
    className?: string;
};
declare const StatusCell: React.FC<StatusCellProps>;
export default StatusCell;
