const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");

var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
client.on("ready", () => {
  client.request("SET_ACTIVITY", {
        "pid": process.pid,
        "activity" : {
          "details" : "Rina-chan Best Waifu",
        "assets" : {
          "large_image" : "rina",
          "large_text" :  "Rina is Best Waifu!",
          "small_image":  "logo",
          "small_text":   "Kumiai!"
        },
        "timestamps": {
          "start": Date.now(),
        },
        "buttons": [{label : "Rina-Chan" , url : "https://kumiai.moe/rina"},{label : "Website",url : "https://kumiai.moe"}]
      }
    }
  );
});
client.login({ clientId : "836320963346825326" }).catch( (error) => { error = null; } );
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) { // eslint-disable-line global-require
  app.quit();
}

var mainWindow;
const createWindow = () => {
  // Create the browser window.

  if(BrowserWindow.getAllWindows().length > 0)
  {
    return;
  }

  mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    resizable: false,
    show: false,
    icon: "./icons/icon.ico",
    titleBarStyle: "hidden",
    frame: false,
    backgroundColor: "#000",
    fullscreenable: false,
    webPreferences: {
      contextIsolation: false,
      disableHtmlFullscreenWindowResize: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      enableRemoteModule: true,
      devTools: false,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  mainWindow.once("ready-to-show", () => mainWindow.show());

};

let tray = null;
app.whenReady().then(() => {
  
    tray = new Tray(
      require("path").resolve(__dirname, "icons/icon.ico")
    );

    
    const contextMenu = Menu.buildFromTemplate([
    
      { label: "Exit", 
        type: "normal",
        click: () => { app.quit(); }
      }
    ]);
    tray.setToolTip("Rina-Chan.");
    tray.setContextMenu(contextMenu);
    tray.on("click", () => { createWindow(); } );

  }
);

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  mainWindow = null;
});




