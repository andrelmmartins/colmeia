/// <reference types="react" />
export type DraggableItem = {
    id: number;
    content: JSX.Element;
};
export interface DraggableProps {
    items: DraggableItem[];
    className?: string;
    gap?: number;
    onHandleChange?: (newOrder: DraggableItem[]) => void;
}
