import { TableCell } from './interfaces';
export interface Props extends TableCell {
    index: number;
    isFixed?: boolean;
    firstColWidth?: number;
    showShadow?: boolean;
}
declare const TableTd: ({ iconField, colSpan, index, isFixed, firstColWidth, tooltip, showShadow, repeat, ...contentProps }: Props) => import("react/jsx-runtime").JSX.Element;
export default TableTd;
