import { IColumnSkeleton } from '../interfaces';
import { SkeletonVariant } from '../../Skeleton/styles';
interface Props {
    headQty: number;
    columns?: IColumnSkeleton[];
    rowsQty?: number;
    variant?: SkeletonVariant;
    collapsable: boolean;
    collapsableSide: 'left' | 'right';
    fixedColumns: number;
    firstColWidth: number;
    showShadow: boolean;
}
export declare const TableSkeleton: ({ headQty, columns, rowsQty, variant, collapsable, collapsableSide, fixedColumns, firstColWidth, showShadow, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
