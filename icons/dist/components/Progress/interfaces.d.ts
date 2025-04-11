import { Color } from '../../util';
export type SizeVariant = 'LG' | 'MD' | 'SM' | 'XL' | 'XXL';
export type ThemeVariant = 'primary' | 'secondary' | 'helper' | 'highlight' | 'success';
export type FormatVariant = 'colmeia' | 'line';
export type ProgressProps = {
    size?: SizeVariant;
    variant?: ThemeVariant;
    format?: FormatVariant;
    /**
     * @description in milliseconds
     */
    time?: number;
};
export type ProgressLineProps = ProgressProps & {
    effect?: 'grow' | 'decrease';
};
export type LoaderProps = {
    size: string;
    color: Color;
};
