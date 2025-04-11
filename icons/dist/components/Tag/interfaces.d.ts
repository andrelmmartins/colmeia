/// <reference types="react" />
export type TagVariant = 'default' | 'filterable';
export type ActionType = 'button' | 'icon';
export interface TagProps {
    /** determines the variant of the tag */
    variant?: TagVariant;
    /** determines the icon inside the tag */
    icon?: JSX.Element;
    /** determines the onClick event of the tag */
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    /** determines where the onClick is triggered */
    actionType?: ActionType;
    /** determine the text inside the tag */
    label?: string;
    /** determines the className  */
    className?: string;
    blocked?: boolean;
    disabled?: boolean;
    hasAction?: boolean;
}
export type TagStyledProps = {
    variant?: TagVariant;
    icon?: React.ReactElement;
    label?: string;
    isDisabled?: boolean;
    blocked?: boolean;
    hasAction?: boolean;
};
