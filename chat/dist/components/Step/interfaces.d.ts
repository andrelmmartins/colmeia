type StepSize = 'md' | 'sm';
type StepsType = {
    label: string;
};
export interface StepProps {
    steps: StepsType[];
    step: number;
    size: StepSize;
    className?: string;
    lineSize?: string;
    noLabel?: boolean;
}
export interface StepsStyle {
    label?: string;
    step: number;
    index: number;
    size: StepSize;
    lineSize?: string;
    noLabel?: boolean;
}
export {};
