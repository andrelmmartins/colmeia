import React from 'react';
import { InputSearchFunctions } from '../InputSearch';
export interface Props {
    filled?: boolean;
    error?: boolean;
    helperText?: string;
    id?: HTMLInputElement['id'];
    name?: HTMLInputElement['name'];
    className?: HTMLInputElement['className'];
    placeholder?: HTMLInputElement['placeholder'];
    defaultValue?: HTMLInputElement['value'];
    disabled?: HTMLInputElement['disabled'];
    onSelect: (value: Option | undefined) => void;
    debounceInterval?: number;
    mode?: 'light' | 'dark';
    options?: Option[];
    filterFunction?: (value: string) => Option[] | Promise<Option[]>;
    notFoundedOptionsText?: string;
    loadingOptionsText?: string;
    dataRecomended?: Option[];
}
export interface Option {
    icon?: JSX.Element;
    value: string;
    label?: string;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<InputSearchFunctions>>;
export default _default;
