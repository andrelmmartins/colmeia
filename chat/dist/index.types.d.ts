import * as react_jsx_runtime from 'react/jsx-runtime';

declare enum ChatMessageFrom {
    ATTENDANT = "ATTENDANT",
    HUMAN = "HUMAN",
    SYSTEM = "SYSTEM"
}
declare enum ChatSystemMessageType {
    DATE = "DATE",
    FORWARD = "FORWARD"
}
interface ChatMessageFile {
    title: string;
    path: string;
    needDownload?: boolean;
    height?: number;
    width?: number;
}
type ChatMessage = {
    id?: string;
    from: ChatMessageFrom.HUMAN | ChatMessageFrom.ATTENDANT;
    type?: undefined;
    content: string;
    file?: ChatMessageFile;
    date?: Date;
    avatarSrc?: string;
} | {
    id?: string;
    from: ChatMessageFrom.SYSTEM;
    type: ChatSystemMessageType.DATE;
    date: Date;
    content?: string;
    file?: undefined;
    avatarSrc?: undefined;
} | {
    id?: string;
    from: ChatMessageFrom.SYSTEM;
    type: ChatSystemMessageType.FORWARD;
    date?: Date;
    content?: string;
    file?: undefined;
    avatarSrc?: undefined;
};

type ChatVariant = 'fullscreen' | 'window';
declare const languages: readonly ["PT", "EN", "ES", "PT-BR"];
type SupportedLanguage = (typeof languages)[number];
interface ChatProps$1 {
    variant?: ChatVariant;
    onColor?: boolean;
    language?: SupportedLanguage | string;
    metadata?: Record<string, string>;
}
interface ChatNecessaryFunctions {
    ready: boolean;
    restartService: () => Promise<void>;
    sendMessage: (text: string, file?: File) => Promise<void>;
    loadChatHistory: (page?: number, perPage?: number) => Promise<{
        messages: ChatMessage[];
        nextPage?: number;
    }>;
}
interface Attendant {
    username: string;
    name: string;
    avatarSrc?: string;
}
declare enum AttendantStatus {
    ONLINE = "online",
    OFFLINE = "offline",
    BUSY = "busy",
    AWAY = "away"
}

interface ChatProps {
    visitor: Visitor;
    url?: URL;
    metadata?: Record<string, string>;
}
interface Visitor {
    token: string;
    name?: string;
    email?: string;
    department?: string;
    phone?: string;
    customFields?: {
        key: string;
        value: string;
        overwrite: boolean;
    }[];
}

declare const RCChat: (props: ChatProps$1 & ChatProps) => react_jsx_runtime.JSX.Element;

export { AttendantStatus, RCChat as Chat, languages };
export type { Attendant, ChatNecessaryFunctions, ChatProps$1 as ChatProps, ChatVariant, SupportedLanguage };
