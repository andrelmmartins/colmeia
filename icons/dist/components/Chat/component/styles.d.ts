import { ChatVariant } from './interfaces';
import { ChatSystemMessageType } from './ChatMessages/interfaces';
export interface CommonStyledProps {
    variant: ChatVariant;
    onColor: boolean;
    type?: ChatSystemMessageType;
    avatarSrc?: string;
}
export declare const AiAvatarUrls: {
    LIGHT: string;
    DARK: string;
};
export declare const getAvatarSrc: (props: CommonStyledProps) => string;
export declare const ChatWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CommonStyledProps, never>;
