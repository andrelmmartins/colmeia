export declare enum ChatMessageFrom {
    ATTENDANT = "ATTENDANT",
    HUMAN = "HUMAN",
    SYSTEM = "SYSTEM"
}
export declare enum ChatSystemMessageType {
    DATE = "DATE",
    FORWARD = "FORWARD"
}
export interface ChatMessageFile {
    title: string;
    path: string;
    needDownload?: boolean;
    height?: number;
    width?: number;
}
export type ChatMessage = {
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
export interface ChatMessagesFunctions {
    scrollToEnd: () => void;
    setMessageList: (messages: ChatMessage[]) => void;
    addMessageToList: (message: ChatMessage) => void;
    addOldMessages: (oldMessages: ChatMessage[]) => void;
    initiate: () => void;
}
