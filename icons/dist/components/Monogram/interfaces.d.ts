export type MonogramVariantSize = 'XL' | 'LG' | 'MD' | 'SM';
export type MonogramVariant = 'light' | 'dark';
export type MonogramProps = {
    /** determines avatar variant */
    variant?: MonogramVariant;
    /** determines avatar label */
    label: string;
    /** determines avatar size */
    size?: MonogramVariantSize;
    /** determines if it has a badge or not */
    badge?: boolean;
};
export type CustomMonogramStyledProps = {
    variant: MonogramVariant;
    size: MonogramVariantSize;
    badge?: boolean;
};
