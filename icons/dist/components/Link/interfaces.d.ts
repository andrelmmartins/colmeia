/// <reference types="react" />
export type LinkVariantType = 'light' | 'dark';
export interface LinkFields {
    /** determines whether the link will open in another tab */
    blank?: boolean;
    /** determines the type of the link */
    variant?: LinkVariantType;
    /** determine the link reference */
    href?: string;
    /** determine the text inside the button */
    linkLabel: string;
    /** determine the size of the link */
    linkSizeLabel?: string;
    /** determine the size of the icon */
    iconSize?: string;
    /** determines the left icon inside the button */
    iconLeft?: React.ReactElement;
    /** determines the right icon inside the button */
    iconRight?: React.ReactElement;
    /** determines whether the link will be underlined */
    underline?: boolean;
    /** determines Link style color */
    oncolor?: boolean;
    /** determines whether the link will be disabled */
    disabled?: boolean;
    /** determines the className  */
    className?: string;
    /** determines the onClick function */
    onClick?: () => void;
}
export type LinkFieldsDiv = {
    blank?: boolean;
    variant?: LinkVariantType;
    href?: string;
    linkLabel?: string;
    icon?: boolean;
    iconLeft?: boolean;
    iconRight?: boolean;
    underline?: boolean;
    oncolor?: boolean;
    disabled?: boolean;
    linkSizeLabel?: string;
    iconSize?: string;
    focused?: boolean;
};
