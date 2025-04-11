import React from 'react';
import { Padding } from '../../util';
type ListingType = {
    label: string;
    value: string;
    inlineLabel?: string;
    inlineValue?: string;
};
type ListingVariantProps = {
    itemList: React.ReactNode;
    colspan?: number;
};
export interface ListingFields {
    itens?: ListingType[];
    itensVariant?: ListingVariantProps[][];
    className?: string;
    itemsPerLine?: number;
    heightLine?: string;
    padding?: Padding[];
    asTable?: boolean;
    infiniteScroll?: boolean;
}
declare const Listing: React.FC<ListingFields>;
export default Listing;
