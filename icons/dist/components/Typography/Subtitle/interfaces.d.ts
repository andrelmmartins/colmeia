/// <reference types="react" />
import { Color, FontWeight, LineHeight } from '../../../util';
export type SubtitleSizeVariants = 'lg' | 'md' | 'sm' | 'xs';
export interface SubtitleTypographyFields {
    size?: SubtitleSizeVariants;
    children?: React.ReactNode;
    oncolor?: boolean;
    color?: Color;
    maxLength?: string | number;
    className?: string;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
}
export type SubtitleTypographyProps = {
    size?: SubtitleSizeVariants;
    oncolor?: boolean;
    color?: Color;
    maxLength?: string | number;
    className?: string;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
};
