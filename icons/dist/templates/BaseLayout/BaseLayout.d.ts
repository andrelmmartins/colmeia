import { Route } from '../../routes';
export interface ICategory {
    title: string;
    subtitle: string;
    list: Route[];
}
declare const BaseLayout: () => import("react/jsx-runtime").JSX.Element;
export default BaseLayout;
