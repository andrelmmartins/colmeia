interface Props {
    mask?: string;
    maskChar?: string;
}
export declare const useMask: ({ mask, maskChar, }: Props) => {
    applyMask: (value: HTMLInputElement['value']) => string;
};
export {};
