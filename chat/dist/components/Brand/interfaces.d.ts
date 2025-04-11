export type BrandVariantType = 'symbol' | 'typography';
export type BrandVariantColor = 'white' | 'black';
export type BrandVariantSize = 'LG' | 'MD' | 'SM';
export interface BrandFields {
    brandType: BrandVariantType;
    size?: BrandVariantSize;
    color?: BrandVariantColor;
    className?: string;
}
export type CustomBrandStyledProps = {
    brandType?: BrandVariantType;
    size?: BrandVariantSize;
    color?: BrandVariantColor;
};
