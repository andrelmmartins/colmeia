import { ServiceProps } from './interfaces';
export declare class Service {
    private websocket;
    private visitor;
    private config;
    private room_id;
    private url;
    private api;
    private callbackOnError;
    private callbackOnAttendantJoin;
    private historyMessages;
    constructor({ visitor, onMessage, onAttendantChangeStatus, onAttendantType, onAttendantJoin, onAttendantLeave, onError, onChatClosed, url, }: ServiceProps);
    connect(attempt?: number): any;
    disconnect(): void;
    sendMessage(text: string, file?: File): Promise<void>;
    loadHistory(page?: number, perPage?: number): Promise<{
        messages: import("../component/ChatMessages/interfaces").ChatMessage[];
        nextPage: number;
    } | {
        messages: import("../component/ChatMessages/interfaces").ChatMessage[];
        nextPage?: undefined;
    }>;
    getConfiguration(): Promise<void>;
    private getDefaultDepartment;
    private registerVisitor;
    private sendCustomFields;
    private loadRoom;
    private uploadFile;
    private handleError;
}
