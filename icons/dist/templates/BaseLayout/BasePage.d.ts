import React, { ReactNode } from 'react';
interface Props {
    title: string;
    subtitle: string;
    children: ReactNode;
}
declare const BasePage: React.FC<Props>;
export default BasePage;
