import React from 'react';
import { Color } from '../../util';
export type Step = {
    index: number;
    label: string;
    icon?: React.ReactNode;
    color?: Color;
};
export type BreadCrumbProps = {
    steps: Step[];
    currentStep: number;
    onStepChange: (step: number) => void;
    reduced?: boolean;
    noBack?: boolean;
};
declare const BreadCrumb: React.FC<BreadCrumbProps>;
export default BreadCrumb;
