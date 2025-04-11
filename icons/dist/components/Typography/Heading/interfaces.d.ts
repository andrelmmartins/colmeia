/// <reference types="react" />
import { Color, FontWeight, LineHeight } from '../../../util';
export type HeadingSizeVariants = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export interface TypographyFields {
    size?: HeadingSizeVariants;
    children?: React.ReactNode;
    oncolor?: boolean;
    color?: Color;
    maxLength?: string;
    className?: string;
    lineHeight?: LineHeight;
}
export type HeadingTypographyProps = {
    size?: HeadingSizeVariants;
    oncolor: boolean;
    color?: Color;
    maxLength?: string;
    className?: string;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
};
