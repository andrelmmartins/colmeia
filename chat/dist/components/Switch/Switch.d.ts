import React, { HTMLAttributes } from 'react';
type SwitchSize = 'default' | 'SM';
interface SwitchStyleProps {
    disabled?: boolean;
    onColor?: boolean;
    size?: SwitchSize;
}
interface SwitchProps extends HTMLAttributes<HTMLInputElement>, SwitchStyleProps {
    /** determine the text inside the input */
    label: string;
    /** determines whether the switch has been checked */
    checked: boolean;
    /** determine the name of the select */
    name?: string;
    /** determines the change value of the switch */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** determines the className  */
    className?: string;
}
declare const Switch: ({ onColor, label, disabled, size, checked, name, onChange, className, ...props }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;
