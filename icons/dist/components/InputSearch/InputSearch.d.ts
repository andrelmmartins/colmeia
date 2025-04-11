import React, { MutableRefObject, Ref } from 'react';
import { Props as SearchProps } from './variants/Search';
import { Props as SelectProps } from './variants/Select';
export interface InputSearchFunctions {
    clearInput?: () => void;
    mode?: 'light' | 'dark';
}
export type InputSearchRef = MutableRefObject<HTMLInputElement> & Ref<InputSearchFunctions>;
type SearchPropsWithoutSelectProps = SearchProps & {
    onSelect?: undefined;
    options?: undefined;
    filterFunction?: undefined;
    notFoundedOptionsText?: undefined;
    loadingOptionsText?: undefined;
    dataRecomended?: undefined;
};
type SelectPropsWithoutSearchProps = SelectProps & {
    onSearch?: undefined;
    startClosed?: undefined;
    alignRight?: undefined;
};
declare const _default: React.ForwardRefExoticComponent<(SearchPropsWithoutSelectProps | SelectPropsWithoutSearchProps) & React.RefAttributes<any>>;
export default _default;
