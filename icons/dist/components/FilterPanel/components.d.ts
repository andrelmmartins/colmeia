import { FieldData, FieldState, Filter, OnChangeFieldProp } from './interfaces';
export declare const convertBRLDateToUS: (date: string) => string;
export declare const convertUSDateToBRL: (date: string) => string;
export declare const mountContent: (filterParams: Filter, fieldsData: FieldState, onChangeFieldProp: OnChangeFieldProp, variant: 'dark' | 'default') => import("react/jsx-runtime").JSX.Element[];
export declare const getTrueKeys: (obj: FieldData) => string[];
