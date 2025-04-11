import { InputDatePickerModeType, LanguageType } from '../../interfaces';
interface FiltersProps {
    mode: InputDatePickerModeType;
    language: LanguageType;
    handleRangeFilterSelect: (start: string, end: string, filter: string) => void;
}
declare const Filters: ({ mode, language, handleRangeFilterSelect, }: FiltersProps) => import("react/jsx-runtime").JSX.Element;
export default Filters;
