import { CollapsableSide, TableRow as TableRowProps } from './interfaces';
interface Props extends TableRowProps {
    isLast: boolean;
    collapsable: boolean;
    collapsableSide: CollapsableSide;
    fixedColumns: number;
    firstColWidth: number;
    onRowClick?: (row: TableRowProps) => void;
    showShadowFixedCol: boolean;
}
declare const TableRow: ({ id, columns, collapseData, collapseChildren, collapsable, fixedColumns, firstColWidth, onRowClick, isLast, showShadowFixedCol, collapsableSide, }: Props) => import("react/jsx-runtime").JSX.Element;
export default TableRow;
