import React from 'react';
import 'moment/locale/es';
import 'moment/locale/pt-br';
import { Attendant, ChatNecessaryFunctions, ChatProps } from './interfaces';
import { ChatMessage } from './ChatMessages/interfaces';
import { ChatHeaderFunctions } from './ChatHeader';
export interface ChatFunctions extends ChatHeaderFunctions {
    addMessageToList: (message: ChatMessage) => void;
    setAttendantTyping: (attendant: Attendant) => void;
    closeChat: () => void;
    onError: (err: Error) => void;
}
export declare const Chat: React.ForwardRefExoticComponent<ChatProps & ChatNecessaryFunctions & React.RefAttributes<ChatFunctions>>;
