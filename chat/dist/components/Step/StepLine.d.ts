import React from 'react';
export type StepsType = number[];
export interface Props {
    margin?: string;
    height?: string;
    lineSize?: string;
    steps: StepsType;
    step: number;
}
declare const StepLine: React.FC<Props>;
export default StepLine;
