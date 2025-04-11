import React from 'react';
import { Route } from '../../routes';
interface Props {
    updatePageLabels: (newTitle: string, newSubtitle: string) => void;
    setActualComponent: (value: React.SetStateAction<JSX.Element>) => void;
    list: Route[];
    darkMode: boolean;
    title: string;
    subtitle: string;
}
declare const CatagoryItem: React.FC<Props>;
export default CatagoryItem;
