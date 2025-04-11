import React from 'react';
export type BadgePillVariant = 'default' | 'success' | 'error' | 'pure' | 'light';
export interface BadgePillProps {
    variant?: BadgePillVariant;
    /** determines the className of the badge pill */
    className?: string;
    label: string;
    icon?: JSX.Element;
}
declare const BadgePill: React.FC<BadgePillProps>;
export default BadgePill;
