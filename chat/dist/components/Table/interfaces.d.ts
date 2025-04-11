import { ReactNode } from 'react';
import { Color, Spacing } from '../../util';
import { SkeletonVariant } from '../Skeleton/styles';
export type CellAligment = 'start' | 'center' | 'end';
export type CollapsableSide = 'left' | 'right';
export type FixedColumns = 0 | 1 | 2;
export interface IColumnSkeleton {
    hasSecondValue: boolean;
}
export interface TableCell {
    value: string | ReactNode;
    secondValue?: string;
    alignment?: CellAligment;
    color?: Color;
    maxLength?: Spacing;
    colSpan?: number;
    iconField?: boolean;
    tooltip?: ReactNode;
    mask?: string;
    bitcoin?: boolean;
    currency?: string;
    decimalPlaces?: number;
    secondMask?: string;
    secondCurrency?: string;
    secondBitcoin?: boolean;
    secondDecimalPlaces?: number;
    repeat?: {
        index: number;
        qty?: number;
    };
}
export interface TableHeadCell {
    value: string | ReactNode;
    alignment?: CellAligment;
    minWidth?: Spacing;
    colSpan?: number;
}
export interface TableRow {
    id: string;
    columns: TableCell[];
    collapseData?: TableCell[][];
    collapseChildren?: ReactNode;
}
export interface TablePagination {
    pages: number;
    itemsLabel?: string;
    itemsPerPageLabel?: string;
    ofPageLabel?: string;
    pageLabel?: string;
    page: number;
    items?: number;
    total: number;
    handleChange: (page: number, limit: number) => void;
}
export interface TableProps {
    id?: string;
    headColumns: TableHeadCell[];
    bodyRows: TableRow[];
    onRowClick?: (row: TableRow) => void;
    fixedColumns?: FixedColumns;
    headBgColor?: Color;
    rowBgColor?: Color;
    hasBoxShadow?: boolean;
    isLoading?: boolean;
    pagination?: TablePagination;
    collapsable?: boolean;
    collapsableSide?: CollapsableSide;
    className?: string;
    hasScroll?: boolean;
    skeleton?: {
        columns?: IColumnSkeleton[];
        rowsQty?: number;
        variant?: SkeletonVariant;
    };
}
