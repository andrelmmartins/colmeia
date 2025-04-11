import { ChatMessage } from './ChatMessages/interfaces';
export type ChatVariant = 'fullscreen' | 'window';
export declare const languages: readonly ["PT", "EN", "ES", "PT-BR"];
export type SupportedLanguage = (typeof languages)[number];
export interface ChatProps {
    variant?: ChatVariant;
    onColor?: boolean;
    language?: SupportedLanguage | string;
    metadata?: Record<string, string>;
}
export interface ChatNecessaryFunctions {
    ready: boolean;
    restartService: () => Promise<void>;
    sendMessage: (text: string, file?: File) => Promise<void>;
    loadChatHistory: (page?: number, perPage?: number) => Promise<{
        messages: ChatMessage[];
        nextPage?: number;
    }>;
}
export interface Attendant {
    username: string;
    name: string;
    avatarSrc?: string;
}
export declare enum AttendantStatus {
    ONLINE = "online",
    OFFLINE = "offline",
    BUSY = "busy",
    AWAY = "away"
}
