import { Color } from '../../util';
import { TableHeadCell } from './interfaces';
interface Props extends TableHeadCell {
    index: number;
    isFixed?: boolean;
    firstColWidth?: number;
    showShadow?: boolean;
    tableId: string;
    bgColor: Color;
}
declare const TableTh: ({ value, index, isFixed, firstColWidth, showShadow, tableId, bgColor, alignment, minWidth, colSpan, }: Props) => import("react/jsx-runtime").JSX.Element;
export default TableTh;
