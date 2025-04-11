import { ChatSystemMessageType, ChatMessageFrom } from './interfaces';
import { CommonStyledProps } from '../styles';
export declare const ChatScrollArea: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ChatMessage: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CommonStyledProps & {
    from: ChatMessageFrom;
    type?: ChatSystemMessageType;
    avatarSrc?: string;
}, never>;
export declare const ChatMessageDateWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    from: ChatMessageFrom;
}, never>;
export declare const ChatTypingMessage: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CommonStyledProps, never>;
export declare const ProgressWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
