import { HTMLAttributes } from 'react';
import { Spacing } from '../../util';
export type ITabAccount = {
    account_name: string;
    agency: string;
    account_number: string;
    onClick?: () => void;
};
export type ITabAccountVariant = 'light' | 'dark';
export type ITabAccountLanguage = 'pt' | 'en' | 'es';
export interface TabAccountStyleProps {
    variant?: ITabAccountVariant;
    width?: Spacing;
    height?: Spacing;
}
export type ICardDescriptionType = 'full' | 'compact';
export interface TabAccountProps extends TabAccountStyleProps, HTMLAttributes<HTMLDivElement> {
    /** determines the variant of TabAccount */
    variant?: ITabAccountVariant;
    /** determines the type of card description */
    type?: ICardDescriptionType;
    /** determines the accounts */
    accounts?: ITabAccount[];
    /** determines the className  */
    className?: string;
    /** determines the language */
    language?: ITabAccountLanguage;
    /** determines the value of account name selected */
    accountNameSelected: string;
    /** determines the value of the agency selected */
    agencySelected: string;
    /** determines the value of the account number selected */
    accountNumberSelected: string;
    bankNumber?: string;
    marginTop?: string;
    handleManagerAccount: () => void;
}
