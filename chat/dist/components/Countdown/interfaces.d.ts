export type CountdownFunctions = {
    pause: () => void;
    addTime: (Value: number) => void;
    removeTime: (Value: number) => void;
    setLoadingRef: (controller: boolean) => void;
    reset: () => void;
    setError: (controller: boolean) => void;
    initCount: () => void;
};
