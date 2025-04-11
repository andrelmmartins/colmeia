/// <reference types="react" />
import { Color, FontWeight, LineHeight } from '../../../util';
export type ParagraphSizeVariants = 'sm' | 'xs' | 'xxs' | 'xxxs';
export interface ParagraphTypographyFields {
    size?: ParagraphSizeVariants;
    children?: React.ReactNode;
    oncolor?: boolean;
    color?: Color;
    maxLength?: string | number;
    className?: string;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
}
export type ParagraphTypographyProps = {
    size?: ParagraphSizeVariants;
    oncolor?: boolean;
    color?: Color;
    maxLength?: string | number;
    className?: string;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
};
