import React from 'react';
type StepItem = {
    icon: JSX.Element;
    title: string;
    subtitle: string;
    onClick: () => void;
    checked: boolean;
};
type VerticalStepProps = {
    steps: StepItem[];
    selectedStep?: number;
    handleCheck: (index: number) => void;
};
declare const VerticalStep: React.FC<VerticalStepProps>;
export default VerticalStep;
