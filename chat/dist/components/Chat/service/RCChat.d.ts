import { ChatProps } from '../component/interfaces';
import * as RocketChat from './interfaces';
declare const RCChat: (props: ChatProps & RocketChat.ChatProps) => import("react/jsx-runtime").JSX.Element;
export default RCChat;
