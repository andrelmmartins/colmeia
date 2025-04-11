/// <reference types="react" />
export interface ISubItem {
    title: string;
    badge?: JSX.Element;
    route: string;
    onClick: () => void;
}
export interface INavItem {
    title: string;
    icon: JSX.Element;
    badge?: JSX.Element;
    route: string;
    subItems?: ISubItem[];
    onClick: () => void;
}
export interface ISidebarProps {
    navItems: INavItem[];
    logoutItem: INavItem;
    forceOpen?: boolean;
}
