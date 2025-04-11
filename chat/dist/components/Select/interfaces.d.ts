import { ChangeEvent, CSSProperties } from 'react';
import { HeadingSizeVariants } from '../Typography/Heading/interfaces';
export type SelectMode = 'dark' | 'light';
export interface Props {
    label?: string;
    options: Option[];
    filled?: boolean;
    id?: HTMLInputElement['id'];
    name?: HTMLInputElement['name'];
    className?: HTMLInputElement['className'];
    disabled?: HTMLInputElement['disabled'];
    placeholder?: HTMLInputElement['placeholder'];
    value?: HTMLInputElement['value'];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
    style?: CSSProperties;
    error?: boolean;
    helperText?: string;
    notFoundedMessage?: string;
    onSelect?: (value: Option | undefined) => void | Promise<void>;
    mode?: SelectMode;
    withoutBottomLine?: boolean;
    defaultOption?: Option;
    neverShowCleanButton?: boolean;
    size?: 'default' | 'SM';
    readOnly?: boolean;
    fontSize?: HeadingSizeVariants;
    fontWeight?: 'regular' | 'semiBold' | 'bold';
    fullWidth?: boolean;
}
export interface Option {
    value: string;
    label?: string;
    icon?: JSX.Element;
    disabled?: boolean;
}
