/// <reference types="react" />
import { ParagraphInterfaces } from '../Typography';
import { FontWeight, IconSizeType, Spacing } from '../../util';
export type ITabItem = {
    label: string;
    url: string;
    active?: boolean;
};
export interface TabItemStyleProps {
    active?: boolean;
    width?: Spacing;
}
export interface IItemsWrapper {
    marginTop?: string;
    borderRadius?: string;
    fontSize?: ParagraphInterfaces.ParagraphSizeVariants;
    fontWeight?: FontWeight;
}
export interface TabItemProps extends TabItemStyleProps {
    /** tabitem item name */
    label?: string;
    /** tabitem item icon */
    tabIcon?: JSX.Element;
    /** name of Tabitem */
    heading?: string;
    /** items inside the tabitem */
    items?: ITabItem[];
    /** determines the items click event */
    onClick: (url: string) => void;
    /** determines the className  */
    className?: string;
    /** item reference url */
    href?: string;
    /** show arrow icon */
    showIcon?: boolean;
    fontSize?: ParagraphInterfaces.ParagraphSizeVariants;
    iconSize?: IconSizeType;
    fontWeight?: FontWeight;
    subitems?: IItemsWrapper;
}
