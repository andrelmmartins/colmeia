import { ChatMessage } from '../ChatMessages/interfaces';
interface ImageViewerProps {
    image?: ChatMessage['file'];
    handleClose: () => void;
    onColor: boolean;
}
export declare const ImageViewer: ({ image, handleClose, onColor }: ImageViewerProps) => import("react/jsx-runtime").JSX.Element;
export {};
