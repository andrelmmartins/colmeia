import React, { HTMLAttributes } from 'react';
type SwitchSize = 'default' | 'SM';
export interface SwitchStyleProps {
    disabled?: boolean;
    onColor?: boolean;
    size?: SwitchSize;
}
export interface SwitchProps extends HTMLAttributes<HTMLInputElement>, SwitchStyleProps {
    label: string;
    checked: boolean;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}
export {};
