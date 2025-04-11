import React from 'react';
interface OptionalChipStyleProps {
    /** determine the chip color style */
    oncolor?: boolean;
    /** determine the chip padding */
    padding?: string;
    /** determine the chip width */
    width?: string;
    /** determine the chip margin */
    margin?: string;
    /** determine the chip background color */
    background?: string;
    /** determine the chip color */
    color?: string;
    /** determines the size of border */
    focusBorder?: string;
    /** determines if the chip is disabled */
    disabled?: boolean;
}
interface ChipProps extends OptionalChipStyleProps {
    /** determine the text inside the chip */
    label: string;
    /** determines the icon inside the chip */
    icon?: JSX.Element;
    /** determine the id of the chip */
    testId?: string;
    /** determines the onclick of the chip */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** determines the className  */
    className?: string;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
