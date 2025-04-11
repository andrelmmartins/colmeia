import React from 'react';
interface Props {
    text: string;
    variant: 'heading' | 'subtitle';
    active: boolean;
    checked: boolean;
}
declare const StepLabel: React.FC<Props>;
export default StepLabel;
