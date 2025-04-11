/// <reference types="react" />
export type SizeVariant = 'LG' | 'MD' | 'SM' | 'XSM';
export type IconShapeVariant = 'default' | 'helper' | 'highlight' | 'warning' | 'success';
export type IconShapeProps = {
    icon?: JSX.Element;
    size: SizeVariant;
    variant?: IconShapeVariant;
    className?: string;
};
