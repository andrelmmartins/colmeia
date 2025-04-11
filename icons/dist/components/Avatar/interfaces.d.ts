import { CustomDefaultTheme } from '../../theme/theme';
import { Color } from '../../util';
export type AvatarVariantSize = 'LG' | 'MD' | 'SM';
export interface Avatarfields {
    size?: AvatarVariantSize;
    badge?: boolean;
    oncolor?: boolean;
    setOncolor?: Color;
    setOffcolor?: Color;
    width?: string;
    height?: string;
    image?: string;
    className?: string;
}
export type CustomAvatarStyledProps = {
    oncolor: boolean;
    size: AvatarVariantSize;
    image: string;
    setOncolor?: Color;
    setOffcolor?: Color;
    width?: string;
    height?: string;
};
export type CustomColor = {
    oncolor?: boolean;
    setOncolor?: Color;
    setOffcolor?: Color;
    image?: string;
    theme: CustomDefaultTheme;
};
