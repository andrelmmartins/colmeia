/// <reference types="react" />
export interface OptionalChipStyleProps {
    oncolor?: boolean;
    padding?: string;
    width?: string;
    margin?: string;
    background?: string;
    color?: string;
    focusBorder?: string;
    disabled?: boolean;
}
export interface ChipProps extends OptionalChipStyleProps {
    label: string;
    icon?: JSX.Element;
    testId?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}
