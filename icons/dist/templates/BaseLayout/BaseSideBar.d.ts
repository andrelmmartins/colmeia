import React from 'react';
import { ICategory } from './BaseLayout';
interface Props {
    open: boolean;
    darkMode: boolean;
    categories: ICategory[];
    setOpen: (value: boolean) => void;
    updatePageLabels: (newTitle: string, newSubtitle: string) => void;
    setActualComponent: (value: React.SetStateAction<JSX.Element>) => void;
}
declare const BaseSideBar: ({ open, darkMode, categories, setOpen, updatePageLabels, setActualComponent, }: Props) => import("react/jsx-runtime").JSX.Element;
export default BaseSideBar;
