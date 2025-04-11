import React from 'react';
import { BorderRadius, Padding } from '../../util';
interface CardProps {
    /** determines the child of the card */
    children: React.ReactNode;
    /** determines the card className  */
    padding?: Padding[];
    /** determines the card className  */
    className?: string;
    boxShadow?: boolean;
    borderRadius?: BorderRadius;
    hasBorder?: boolean;
}
declare const Card: React.FC<CardProps>;
export default Card;
