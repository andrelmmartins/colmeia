export type ButtonGroupSize = 'SM' | 'MD' | 'LG';
export type ButtonGroupVariants = 'default' | 'dark';
export interface ButtonOptions {
    label: string;
    value: string;
    disabled?: boolean;
}
export type ButtonGroupProps = {
    variant?: ButtonGroupVariants;
    /** determines the size of the ButtonGroup */
    size?: ButtonGroupSize;
    /**   determines which items will be listed  */
    options: ButtonOptions[];
    /**  determines which option is selected */
    selected?: string;
    /** determines the onclick of the ButtonGroup */
    onClick: (value: string) => void;
    /** determines the className  */
    className?: string;
};
export interface TabNavigationStyle {
    width?: number;
    left?: number;
    selected?: boolean;
    variant?: ButtonGroupVariants;
    label?: string;
    size?: ButtonGroupSize;
}
