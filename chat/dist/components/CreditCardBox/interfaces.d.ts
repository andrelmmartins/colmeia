export type CreditCardVariant = 'credit' | 'debt';
export type CreditCardOptions = 'MASTERCARD' | 'VISA' | 'AMERICAN_EXPRESS' | 'HIPERCARD' | 'ELO' | 'DINERSCARD' | 'LIDER';
export type OptionsModalCard = {
    label?: string;
    onClick?: () => void;
};
export type CreditCardBoxProps = {
    number?: string;
    type?: CreditCardVariant;
    selected?: boolean;
    onClick?: () => void;
    onDelete?: () => void;
    brand?: CreditCardOptions;
    label?: string;
    excludeLabel?: string;
    options?: OptionsModalCard[];
};
