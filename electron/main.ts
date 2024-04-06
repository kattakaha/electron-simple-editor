import fs from "node:fs";
import path from "node:path";
import { app, BrowserWindow, ipcMain, dialog } from "electron";

process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;

const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);

let fullPath: string | undefined = undefined;

// Save file
ipcMain.on("save", (_event: Electron.IpcMainEvent, text: string) => {
  if (fullPath === undefined) {
    dialog
      .showSaveDialog(win!, {
        title: "Save file",
        defaultPath: "filename.txt",
        filters: [{ name: "Text files", extensions: ["txt"] }],
      })
      .then(({ filePath }) => {
        if (!filePath) return;
        writeTofile(filePath, text);
        fullPath = filePath;
      });
  } else {
    writeTofile(fullPath, text);
  }
});

// Save string to file
function writeTofile(filePath: string, text: string) {
  fs.writeFile(filePath, text, "utf-8", (err) => {
    if (err) console.error("there was an error:", err);
    console.log("file written successfully");
    win?.webContents.send("saved", "success");
  });
}
