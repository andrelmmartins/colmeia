import React from 'react';
export type BrandVariantType = 'symbol' | 'typography';
export type BrandVariantColor = 'white' | 'black';
export type BrandVariantSize = 'LG' | 'MD' | 'SM';
export interface BrandFields {
    /** determines the type of the brand */
    brandType: BrandVariantType;
    /** determines the size of the brand */
    size?: BrandVariantSize;
    /** determines the color of the brand */
    color?: BrandVariantColor;
    /** determines the avatar className  */
    className?: string;
}
declare const Brand: React.FC<BrandFields>;
export default Brand;
