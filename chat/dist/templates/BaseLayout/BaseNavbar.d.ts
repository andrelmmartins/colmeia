import React from 'react';
interface Props {
    updatePageLabels: (newTitle: string, newSubtitle: string) => void;
    isDarkMode: () => void;
    darkMode: boolean;
    setActualComponent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}
declare const BaseNavBar: React.FC<Props>;
export default BaseNavBar;
