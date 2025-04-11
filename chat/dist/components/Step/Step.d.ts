import React from 'react';
type StepSize = 'md' | 'sm';
type Variant = 'default' | 'line';
type StepsType = {
    label: string;
};
interface StepProps {
    /** determine all steps */
    steps: StepsType[] | number[];
    /** determine the current step */
    step: number;
    /** determine the size of the Step */
    size: StepSize;
    /** determines the className  */
    className?: string;
    lineSize?: string;
    noLabel?: boolean;
    variant?: Variant;
    margin?: string;
    height?: string;
}
declare const Step: React.FC<StepProps>;
export default Step;
