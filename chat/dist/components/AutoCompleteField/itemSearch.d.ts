import React from 'react';
export type AutocompleteProps = {
    title?: string;
    onclick?: () => void;
    isSelected?: boolean;
    className?: string;
};
declare const ItemSearch: React.FC<AutocompleteProps>;
export default ItemSearch;
