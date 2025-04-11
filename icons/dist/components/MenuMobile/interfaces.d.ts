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
export interface IBalanceBarProps {
    title: string;
    size: 'LG' | 'SM';
    balance_title: string;
    balance: number;
    releases_title: string;
    releases: number;
}
export interface ITitlePageProps {
    title: string;
    backBtnAction?: () => void;
    cancelBtnAction?: () => void;
    cancelBtnText?: string;
}
export interface IMenuMobileProps {
    navItems: INavItem[];
    logoutItem: INavItem;
    balanceBar?: IBalanceBarProps;
    titlePage?: ITitlePageProps;
    isOpen?: boolean;
    language?: 'pt' | 'en' | 'es';
}
