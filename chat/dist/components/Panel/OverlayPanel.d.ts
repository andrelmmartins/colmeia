import React from 'react';
interface OverlayProps {
    children: React.ReactNode;
    openPanel: boolean;
}
declare const OverlayPanel: ({ children, openPanel }: OverlayProps) => import("react/jsx-runtime").JSX.Element;
export default OverlayPanel;
