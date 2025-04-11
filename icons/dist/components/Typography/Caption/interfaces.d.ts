/// <reference types="react" />
import { Color, FontWeight, LineHeight } from '../../../util';
export interface CaptionTypographyFields {
    children?: React.ReactNode;
    oncolor?: boolean;
    color?: Color;
    className?: string;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
}
export type CaptionTypographyProps = {
    oncolor?: boolean;
    color?: Color;
    className?: string;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
};
