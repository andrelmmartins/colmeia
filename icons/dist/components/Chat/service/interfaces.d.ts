import { ChatMessage } from '../component/ChatMessages/interfaces';
import { Attendant, AttendantStatus } from '../component/interfaces';
export interface ChatProps {
    visitor: Visitor;
    url?: URL;
    metadata?: Record<string, string>;
}
export interface ServiceProps extends ChatProps {
    onMessage: (message: ChatMessage) => void;
    onAttendantJoin: (attendant: Attendant) => void;
    onAttendantLeave: (attendant: Attendant) => void;
    onAttendantType: (attendant: Attendant) => void;
    onAttendantChangeStatus: (status: AttendantStatus) => void;
    onError: (err: Error) => void;
    onChatClosed: () => void;
}
export interface Visitor {
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
export declare enum MessageType {
    USER_JOIN = "uj",
    USER_LEAVE = "ul",
    CHAT_TRANSFERED = "livechat_transfer_history",
    CHAT_STARTED = "livechat-started",
    CHAT_CLOSED = "livechat-close",
    CHAT_PLACED_ON_HOLD = "omnichannel_placed_chat_on_hold",
    CHAT_ON_HOLD_RESUMED = "omnichannel_on_hold_chat_resumed"
}
export declare enum TransferScope {
    DEPARTMENT = "department",
    AGENT = "agent"
}
export interface Message {
    _id: string;
    rid: string;
    msg: string;
    token: string;
    alias: string;
    ts: string | {
        $date: number;
    };
    t?: MessageType;
    u: {
        _id: string;
        username: string;
        name: string;
    };
    _updatedAt: string | {
        $date: number;
    };
    urls: any[];
    mentions: any[];
    channels: any[];
    transferData?: {
        transferredBy: {
            _id: string;
            username: string;
            name: string;
            userType: string;
        };
        ts: {
            $date: number;
        };
        scope: TransferScope;
        nextDepartment?: {
            _id: string;
            name: string;
        };
        transferredTo?: {
            _id: string;
            username: string;
            name: string;
        };
    };
    attachments?: {
        title: string;
        title_link: string;
        description: string;
        descriptionMd: MarkdownElement[];
        image_type: string;
        image_preview: string;
        image_dimensions: {
            width: number;
            height: number;
        };
    }[];
    fileUpload?: {
        publicFilePath: string;
    };
    md?: MarkdownElement[];
}
export type MarkdownElement = Paragraph | LineBreak | CodeBlock | OrderedList | UnorderedList;
export declare enum MarkdownType {
    PARAGRAPH = "PARAGRAPH",
    LINE_BREAK = "LINE_BREAK",
    CODE = "CODE",
    ORDERED_LIST = "ORDERED_LIST",
    UNORDERED_LIST = "UNORDERED_LIST"
}
interface Paragraph {
    type: MarkdownType.PARAGRAPH;
    value: MarkdownContent[];
}
interface LineBreak {
    type: MarkdownType.LINE_BREAK;
}
interface CodeBlock {
    type: MarkdownType.CODE;
    language: string;
    value: MarkdownContent[];
}
interface OrderedList {
    type: MarkdownType.ORDERED_LIST;
    value: MarkdownContent[];
}
interface UnorderedList {
    type: MarkdownType.UNORDERED_LIST;
    value: MarkdownContent[];
}
export type MarkdownContent = PlainText | Bold | Italic | Strike | InlineCode | Link | Emoji | CodeLine | ListItem;
export declare enum MarkdownContentType {
    PLAIN_TEXT = "PLAIN_TEXT",
    BOLD = "BOLD",
    ITALIC = "ITALIC",
    STRIKE = "STRIKE",
    INLINE_CODE = "INLINE_CODE",
    LINK = "LINK",
    EMOJI = "EMOJI",
    CODE_LINE = "CODE_LINE",
    LIST_ITEM = "LIST_ITEM"
}
interface PlainText {
    type: MarkdownContentType.PLAIN_TEXT;
    value: string;
}
interface Bold {
    type: MarkdownContentType.BOLD;
    value: MarkdownContent[];
}
interface Italic {
    type: MarkdownContentType.ITALIC;
    value: MarkdownContent[];
}
interface Strike {
    type: MarkdownContentType.STRIKE;
    value: MarkdownContent[];
}
interface InlineCode {
    type: MarkdownContentType.INLINE_CODE;
    value: PlainText;
}
interface Link {
    type: MarkdownContentType.LINK;
    value: {
        src: PlainText;
        label: MarkdownContent[];
    };
}
interface Emoji {
    type: MarkdownContentType.EMOJI;
    value: PlainText;
    shortCode: string;
}
interface CodeLine {
    type: MarkdownContentType.CODE_LINE;
    value: PlainText;
}
interface ListItem {
    type: MarkdownContentType.LIST_ITEM;
    value: MarkdownContent[];
}
export declare enum MSG {
    PING = "ping",
    CONNECTED = "connected",
    MESSAGE = "stream-room-messages",
    NOTIFY = "stream-notify-room",
    LIVECHAT = "stream-livechat-room",
    SUBSCRIPTION_RETURN = "changed"
}
export declare enum NotificationType {
    TYPING = "user-typing"
}
export declare enum LivechatAlert {
    AGENT_DATA = "agentData",
    AGENT_STATUS = "agentStatus"
}
interface BaseWebSocketMessage<CollectionType, ArgsType> {
    msg: MSG;
    id: string;
    collection: CollectionType;
    fields: {
        eventName: string;
        args: ArgsType[];
    };
}
type WebSocketMessageAsMessage = BaseWebSocketMessage<MSG.MESSAGE, Message>;
type WebSocketMessageAsNotification = BaseWebSocketMessage<MSG.NOTIFY, string | string[] | Record<string, unknown>>;
type WebSocketMessageAsAlertsToAgentData = BaseWebSocketMessage<MSG.LIVECHAT, {
    type: LivechatAlert.AGENT_DATA;
    data?: {
        _id: string;
        status: string;
        name: string;
        username: string;
        livechat: {
            name: string;
            username: string;
            email: string;
            maxNumberSimultaneousChat: number;
            voipExtension: string;
        };
    };
}>;
type WebSocketMessageAsAlertsToAgentStatus = BaseWebSocketMessage<MSG.LIVECHAT, {
    type: LivechatAlert.AGENT_STATUS;
    status: AttendantStatus;
}>;
export type WebSocketMessage = WebSocketMessageAsMessage | WebSocketMessageAsNotification | WebSocketMessageAsAlertsToAgentData | WebSocketMessageAsAlertsToAgentStatus;
export interface ConfigResponse {
    enabled: boolean;
    settings: {
        registrationForm: boolean;
        allowSwitchingDepartments: boolean;
        nameFieldRegistrationForm: boolean;
        emailFieldRegistrationForm: boolean;
        displayOfflineForm: boolean;
        videoCall: boolean;
        fileUpload: boolean;
        language: string;
        transcript: boolean;
        historyMonitorType: string;
        foeAcceptDataProcessingConsent: boolean;
        showConnecting: boolean;
        agentHiddenInfo: boolean;
        clearLocalStorageWhenChatEnded: boolean;
        limitTextLength: boolean;
        hiddenSystemMessages: any[];
        livechatLogo: object;
        hideWatermark: boolean;
        visitorsCanCloseChat: boolean;
    };
    theme: {
        title: string;
        color: string;
        offlineTitle: string;
        offlineColor: string;
        position: string;
        background: string;
        actionLinks: {
            webrtc: {
                actionLinksAlignment?: string;
                i18nLabel: string;
                label?: string;
                method_id?: string;
                danger?: boolean;
            }[];
            jitsi: {
                icon: string;
                i18nLabel: string;
            }[];
        };
    };
    messages: {
        offlineMessage: string;
        offlineSuccessMessage: string;
        offlineUnavailableMessage: string;
        conversationFinishedMessage: string;
        conversationFinishedText: string;
        transcriptMessage: string;
        registrationFormMessage: string;
        dataProcessingConsentText: string;
    };
    survey: {
        items: string[];
        values: string[];
    };
    triggers: any[];
    departments: {
        _id: string;
        name: string;
        showOnRegistration: boolean;
        showOnOfflineForm: boolean;
        departmentsAllowedToForward: any[];
    }[];
    resources: {
        sound: string;
        emojis: any[];
    };
    online: boolean;
    customFields: any[];
    room: {
        _id: string;
        open: boolean;
        servedBy: {
            _id: string;
            username: string;
            ts: string;
        };
        departmentId: string;
    };
    guest: {
        _id: string;
        token: string;
        username: string;
    };
    agent: {
        _id: string;
        name: string;
        username: string;
        status: string;
        emails: {
            address: string;
            verified: boolean;
        }[];
    };
}
export type DefaultDepartamentSearchParams = {
    _id?: string;
    name?: string;
    showOnRegistration?: boolean;
    showOnOfflineForm?: boolean;
    departmentsAllowedToForward?: any[];
};
export interface VisitorResponse {
    _id: string;
    username: string;
    status: string;
    ts: string;
    _updatedAt: string;
    name: string;
    phone: {
        phoneNumber: string;
    }[];
    token: string;
    visitorEmails: {
        address: string;
    }[];
    lastChat?: {
        _id: string;
        ts: string;
    };
    department: string;
}
export interface RoomResponse {
    _id: string;
    cl: boolean;
    contactId: string;
    estimatedWaitingTimeQueue: number;
    fname: string;
    lm: string;
    msgs: number;
    open: boolean;
    priorityWeight: number;
    queuedAt: string;
    soue: {
        type: string;
        destination: string;
    };
    t: string;
    ts: string;
    usersCount: number;
    v: {
        _id: string;
        username: string;
        token: string;
        status: string;
        activity: string[];
    };
    verified: boolean;
    waitingResponse: boolean;
    _updatedAt: string;
    lastMessage: {
        _id: string;
        t: string;
        rid: string;
        ts: string;
        msg: string;
        u: {
            _id: string;
            username: string;
        };
        groupable: boolean;
        token: string;
        _updatedAt: string;
    };
    servedBy: {
        _id: string;
        username: string;
        ts: string;
    };
}
export type DefaultResponse = {
    success: true;
    error: undefined;
} | {
    success: false;
    error: string;
};
export {};
