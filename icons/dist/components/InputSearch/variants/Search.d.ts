import React, { FocusEvent } from 'react';
import { InputSearchFunctions } from '../InputSearch';
export interface Props {
    filled?: boolean;
    startClosed?: boolean;
    error?: boolean;
    helperText?: string;
    id?: HTMLInputElement['id'];
    name?: HTMLInputElement['name'];
    className?: HTMLInputElement['className'];
    placeholder?: HTMLInputElement['placeholder'];
    defaultValue?: HTMLInputElement['value'];
    disabled?: HTMLInputElement['disabled'];
    mode?: 'light' | 'dark';
    debounceInterval?: number;
    alignRight?: boolean;
    onSearch: (value: string) => void;
}
export type InputProps = Pick<Props, 'error' | 'id' | 'name' | 'placeholder' | 'disabled'> & {
    value: HTMLInputElement['value'];
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: FocusEvent<HTMLInputElement>) => void;
    mode: 'light' | 'dark';
};
export declare const InputComponent: React.ForwardRefExoticComponent<Pick<Props, "disabled" | "name" | "placeholder" | "id" | "error"> & {
    value: HTMLInputElement['value'];
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange: (e: FocusEvent<HTMLInputElement>) => void;
    mode: 'light' | 'dark';
} & React.RefAttributes<HTMLInputElement>>;
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<InputSearchFunctions>>;
export default _default;
