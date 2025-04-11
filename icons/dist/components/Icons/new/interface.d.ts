type IconSize = 'SM' | 'MD' | 'LG';
export type IconProps = {
    /**
     * SM: 1rem (16px) / MD: 1.5rem (24px) / LG: 2rem (32px)
     */
    size?: 'SM' | 'MD' | 'LG';
    width?: string;
    height?: string;
    className?: string;
    [key: string]: any;
};
export declare const translateSizeToWidth: (size?: IconSize) => "1rem" | "1.5rem" | "2rem";
export {};
