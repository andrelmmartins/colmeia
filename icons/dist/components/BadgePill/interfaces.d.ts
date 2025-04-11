/// <reference types="react" />
import { CustomDefaultTheme } from '../../theme/theme';
export type BadgePillVariant = 'default' | 'success' | 'error';
export interface BadgePillProps {
    variant?: BadgePillVariant;
    /** determines the className of the badge pill */
    className?: string;
    label: string;
    icon?: JSX.Element;
}
export interface PillProps {
    variant?: string;
    theme?: CustomDefaultTheme;
}
