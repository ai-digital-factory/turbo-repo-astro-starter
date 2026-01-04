/// <reference types="vite/client" />

interface Window {
  // expose in the `electron/preload.ts`
  ipcRenderer: {
    on(
      channel: string,
      listener: (...args: unknown[]) => void,
    ): (() => void) | undefined;
    off(channel: string, listener: (...args: unknown[]) => void): void;
    send(channel: string, ...args: unknown[]): void;
    invoke(channel: string, ...args: unknown[]): Promise<unknown>;
  };
}
