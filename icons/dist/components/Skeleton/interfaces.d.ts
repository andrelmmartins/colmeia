import { ReactNode } from 'react';
import { SkeletonStyles, SkeletonVariant } from './styles';
export interface SkeletonProps extends SkeletonStyles {
    children?: ReactNode;
    variant?: SkeletonVariant;
}
