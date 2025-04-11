type CardSize = 'sm' | 'lg';
interface ICard {
    color: string;
    title: string;
    token: string;
    isDark?: boolean;
    size?: CardSize;
}
export declare const Card: ({ color, title, token, isDark, size, }: ICard) => import("react/jsx-runtime").JSX.Element;
declare const MainColorsPage: () => import("react/jsx-runtime").JSX.Element;
export default MainColorsPage;
