import React from 'react';
export type AutocompleteItem = {
    id: string;
    title: string;
};
export type AutocompleteProps = {
    dataRecomended?: AutocompleteItem[];
    placeholder?: string;
    name?: string;
    className?: string;
    helperText?: string;
    error?: boolean;
    selectedValue?: AutocompleteItem;
    noOptionLabel?: string;
    onChangeValue?: (value: AutocompleteItem) => void;
    functionGetData?: (value: string) => Promise<AutocompleteItem[]>;
    bgColor?: boolean;
};
declare const AutoCompleteField: React.FC<AutocompleteProps>;
export default AutoCompleteField;
