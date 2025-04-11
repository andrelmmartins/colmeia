/// <reference types="react" />
import { Color } from '../../util';
export interface Step {
    index: number;
    label: string;
    icon?: React.ReactNode;
    color?: Color;
    onClick?: () => void;
}
