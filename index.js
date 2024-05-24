const {app, BrowserWindow} = require("electron");
const path = require("path")

if(require("electron-squirrel-startup")) app.quit();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 700,
        height: 500,
        icon: path.join(__dirname, "web/images/icon.ico")
    });
    win.setResizable(false);
    win.setMenuBarVisibility(false);
    win.setTitle("QR maker");
    win.loadFile(path.join(__dirname, "web/index.html"));
};

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());