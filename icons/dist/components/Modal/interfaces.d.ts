/// <reference types="react" />
import { BorderRadius, Padding } from '../../util';
type CommonModalProps = {
    className?: string;
    open: boolean;
    handleClose: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void;
    handleCloseOverlay?: (event: React.MouseEvent<HTMLDivElement>) => void;
    dismissible?: boolean;
    padding?: Padding[];
    borderRadius?: BorderRadius;
    hasBorder?: boolean;
    width?: `${string}rem` | `${string}px` | `${string}%`;
    maxWidth?: `${string}rem` | `${string}px` | `${string}%`;
};
export type ModalDefaultProps = {
    title: string;
    content: string;
    confirmText: string;
    cancelText: string;
    handleConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & CommonModalProps;
export type ModalCustomProps = {
    children: React.ReactNode;
} & CommonModalProps;
export type ModalProps = ModalDefaultProps | ModalCustomProps;
export {};
