import React, { HTMLProps } from 'react';
interface ITableTooltip extends HTMLProps<HTMLDivElement> {
    parent: any;
}
declare const TableTooltip: ({ children, onMouseEnter, onMouseLeave, parent, }: ITableTooltip) => React.ReactPortal;
export default TableTooltip;
