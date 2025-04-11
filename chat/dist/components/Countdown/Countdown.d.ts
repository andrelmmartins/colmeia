import React from 'react';
import { CountdownFunctions } from './interfaces';
export type LinkFieldsDiv = {
    error?: boolean;
    time?: number;
    label?: string;
    isLoading?: boolean;
    resetFunction?: () => void;
    overTimeFunction?: () => void;
};
declare const _default: React.ForwardRefExoticComponent<LinkFieldsDiv & React.RefAttributes<CountdownFunctions>>;
export default _default;
