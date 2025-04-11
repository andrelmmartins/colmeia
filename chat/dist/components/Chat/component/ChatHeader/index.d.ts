import React from 'react';
import { Attendant, AttendantStatus, ChatProps } from '../interfaces';
export declare const AiAttendant: Attendant;
interface ChatHeaderProps {
    isInitiating: boolean;
}
export interface ChatHeaderFunctions {
    attendantJoin: (attendant: Attendant) => void;
    attendantLeave: (attendant: Attendant) => void;
    setAttendantStatus: (status: AttendantStatus) => void;
}
export declare const ChatHeader: React.ForwardRefExoticComponent<ChatProps & ChatHeaderProps & React.RefAttributes<ChatHeaderFunctions>>;
export {};
