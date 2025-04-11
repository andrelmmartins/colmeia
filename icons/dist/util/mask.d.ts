export declare class MaskPattern {
    value: string | number;
    pattern?: string;
    currency?: string;
    decimalPlaces?: number;
    mask(value: string | number, options?: {
        pattern?: string;
        currency?: string;
        decimalPlaces?: number;
        bitcoin?: boolean;
    }): string;
    private maskValue;
    private maskCoin;
}
