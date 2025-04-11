import React from 'react';
import { Color } from '../../util';
export type AvatarVariantSize = 'LG' | 'MD' | 'SM';
export type AvatarProps = {
    /** determines avatar size */
    size?: AvatarVariantSize;
    /** determines if it has a badge or not */
    badge?: boolean;
    /** determines avatar color */
    oncolor?: boolean;
    /** oncolor or offcolor */
    setOncolor?: Color;
    /** determines avatar custom color */
    setOffcolor?: Color;
    /**  determines avatar width */
    width?: string;
    /** determines avatar height */
    height?: string;
    /** determines avatar image */
    image?: string;
    /** determines the avatar className */
    className?: string;
};
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
