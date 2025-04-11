import React from 'react';
import { SideIconVariant, TabOptions, TabVariant } from './interfaces';
export type TabProps = {
    /** determines the type of the NavigationTab */
    variant?: TabVariant;
    /**   determines which items will be listed  */
    options: TabOptions[];
    /**  determines which option is selected */
    selected: number;
    highlighted?: boolean;
    /** determines the onclick of the NavigationTab */
    onClick: (index: number) => void;
    /** determines the className  */
    className?: string;
    sideIcon?: SideIconVariant;
};
declare const NavigationTab: React.FC<TabProps>;
export default NavigationTab;
