import moment from 'moment';
import { SupportedLanguage } from '../interfaces';
export declare function formatTimeText(text: string, language: string | SupportedLanguage): string;
export declare function dateMonthFormatted(language: SupportedLanguage | string, date: moment.Moment): string;
