import React from 'react';
import { Step } from './interfaces';
export type KebabProps = {
    className?: string;
    steps: Step[];
    marginTop?: string;
    onStepChange?: (step: number) => void;
};
declare const Kebab: React.FC<KebabProps>;
export default Kebab;
