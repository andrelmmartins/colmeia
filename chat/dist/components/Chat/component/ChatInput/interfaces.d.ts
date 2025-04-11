import { FileError } from 'react-dropzone';
import { ChatNecessaryFunctions } from '../interfaces';
export interface ChatInputAreaFunctions {
    handleError: (err: Error) => void;
    initiate: () => void;
}
export interface UploadedFile {
    file: File;
    errors: readonly FileError[];
}
export interface ChatInputProps {
    isInitiating: boolean;
    sendMessage: ChatNecessaryFunctions['sendMessage'];
    scrollToEnd: () => void;
}
