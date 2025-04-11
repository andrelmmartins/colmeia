import { AttendantStatus, SupportedLanguage } from './component/interfaces';
export declare const defaultLanguage = "PT-BR";
interface I18nLanguage {
    inputPlaceholder: string;
    initialMessages: string[];
    notificationText: string;
    monthDateFormat: string;
    restartChat: string;
    attendantStatus: Record<AttendantStatus, string>;
    fileErrors: {
        'file-too-large': string;
        'file-invalid-type': string;
    };
    errors: Record<string, string>;
}
export declare const i18n: Record<SupportedLanguage, I18nLanguage>;
export {};
