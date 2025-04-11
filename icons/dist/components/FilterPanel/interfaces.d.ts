import { SelectInterfaces } from '../Select';
import { InputSearchProps } from '../InputSearch';
import { Spacing } from '../../util';
export type FilterPanelProps = {
    filterParams: Filter;
    resultFunction?: (queryParams: string, dataObject: FieldState, selectedContent: SelectedContent[]) => void;
    filterButtonLabel?: string;
    clearButtonLabel?: string;
    className?: string;
    variant?: 'default' | 'dark';
    top?: string;
};
export type PaddingProps = {
    top?: Spacing;
    bottom?: Spacing;
    left?: Spacing;
    right?: Spacing;
};
export interface Field {
    type: FieldType;
    name: string;
    label?: string | string[];
    queryKey?: string | string[];
    placeholder?: string | string[];
    helperText?: string;
    listOptions?: ListOption[];
    options?: GenericItem;
    prefix?: string;
    hasRange?: boolean;
    filterFunction?: InputSearchProps['filterFunction'];
    defaultValue?: string | number | readonly string[];
    defaultOption?: SelectInterfaces.Option;
    defaultOptions?: SelectInterfaces.Option[];
}
export interface Section {
    title: string;
    fields: Field[];
}
export interface ListOption {
    label: string;
    key: string;
}
export interface Filter {
    title: string;
    sections: Section[];
}
export interface FieldState {
    [key: string]: string | GenericItem;
}
export interface FieldData {
    [key: string]: FieldData | string | boolean | number;
}
export interface GenericItem {
    [key: string]: any;
}
export interface SelectedContent {
    key: string;
    label: string;
    parentName?: string;
}
export type FieldType = 'text' | 'date' | 'list' | 'datetime' | 'select' | 'currency' | 'search' | 'radio' | 'tags';
export type OnChangeFieldProp = (fieldName: string, fieldData: FieldData) => void;
export type FilterPanelFunctions = {
    clearFields?: () => void;
    clearField?: (fieldName: string, listOption?: string) => void;
    openPanel?: () => void;
    closePanel?: () => void;
};
