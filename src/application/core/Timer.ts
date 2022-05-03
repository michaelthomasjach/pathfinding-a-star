export const systemTimer: Timer = {
    now: Date.now,
    setInterval,
    clearInterval,
    setTimeout,
    clearTimeout,
};

export interface Timer {
    now: () => number;
    setInterval: (callback: (...args: any[]) => void, period: number) => number;
    clearInterval: (intervalId: any) => void;
    setTimeout: (callback: (...args: any[]) => void, timeout: number) => number;
    clearTimeout: (timeoutId: any) => void;
}
