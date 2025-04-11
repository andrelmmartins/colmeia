import { IColumnSkeleton } from '../interfaces';
import { SkeletonVariant } from '../../Skeleton/styles';
interface Props extends IColumnSkeleton {
    index: number;
    isSmallerWidth: boolean;
    isFixed?: boolean;
    firstColWidth?: number;
    showShadow: boolean;
    variant?: SkeletonVariant;
}
export declare const TdSkeleton: ({ hasSecondValue, index, isSmallerWidth, isFixed, firstColWidth, showShadow, variant, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
