import { ipcRenderer, contextBridge } from "electron";

// Whitelist of allowed channels
const ALLOWED_CHANNELS = ["main-process-message"] as const;

type AllowedChannel = (typeof ALLOWED_CHANNELS)[number];

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(channel: string, listener: (...args: unknown[]) => void) {
    if (ALLOWED_CHANNELS.includes(channel as AllowedChannel)) {
      const subscription = (
        _event: Electron.IpcRendererEvent,
        ...args: unknown[]
      ) => listener(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    }
  },
  off(channel: string, listener: (...args: unknown[]) => void) {
    if (ALLOWED_CHANNELS.includes(channel as AllowedChannel)) {
      ipcRenderer.removeListener(
        channel,
        listener as unknown as (
          event: Electron.IpcRendererEvent,
          ...args: unknown[]
        ) => void,
      );
    }
  },
  send(channel: string, ...args: unknown[]) {
    if (ALLOWED_CHANNELS.includes(channel as AllowedChannel)) {
      ipcRenderer.send(channel, ...args);
    }
  },
  invoke(channel: string, ...args: unknown[]) {
    if (ALLOWED_CHANNELS.includes(channel as AllowedChannel)) {
      return ipcRenderer.invoke(channel, ...args);
    }
  },

  // You can expose other APIs you need here.
  // ...
});
