export type StatusVariant = 'Active' | 'Pending' | 'Blocked' | 'Skeleton' | 'Paid' | 'Expired';
export interface TagStatusProps {
    variant: StatusVariant;
    label: string;
}
export type SkeletonProps = {
    isSkeleton: boolean;
};
