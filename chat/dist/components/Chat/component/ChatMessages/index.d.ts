import React from 'react';
import { ChatMessagesFunctions } from './interfaces';
import { Attendant, ChatProps } from '../interfaces';
interface MessagesAreaProps {
    attendantTyping: Attendant | undefined;
    loadNewHistoryPage?: () => Promise<void>;
    isInitiating: boolean;
    chatIsOpen: boolean;
}
export declare const ChatMessages: React.ForwardRefExoticComponent<ChatProps & MessagesAreaProps & React.RefAttributes<ChatMessagesFunctions>>;
export {};
