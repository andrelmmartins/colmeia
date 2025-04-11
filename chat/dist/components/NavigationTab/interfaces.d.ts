/// <reference types="react" />
export type TabVariant = 'filled' | 'underlined';
export type TabProps = {
    variant?: TabVariant;
    options: string[];
    icon?: JSX.Element;
    selected: number;
    onClick: (index: number) => void;
    className?: string;
};
export interface TabNavigationStyle {
    width?: number;
    left?: number;
    selected?: boolean;
    variant?: TabVariant;
    highlighted?: boolean;
}
export type SideIconVariant = 'left' | 'right';
export type TabOptions = {
    label?: string;
    icon?: JSX.Element;
};
