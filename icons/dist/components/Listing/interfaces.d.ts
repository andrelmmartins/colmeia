export interface ListingFields {
    itens?: ListingType[];
    className?: string;
}
type ListingType = {
    label: string;
    value: string;
    inlineLabel?: string;
    inlineValue?: string;
};
export {};
