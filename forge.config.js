const path = require("path");

module.exports = {
    "packagerConfig": {
        "icon": "./icon.ico",
        "appCopyright": "Monitas Chinas Reales Inc.",
        "junk": false,
        "executableName": "RinaDiscord!",
        "win32metadata": {
        "OriginalFilename": "Rina Discord",
        "FileDescription": "Rina is ON!",
        }
        },
        "makers": [
            {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "loadingGif": "./src/img/Installer.gif",
                "authors": "Monitas Chinas Reales Inc",
                "copyright": "Monitas Chinas Reales Inc",
                "description": "Rina is ON!",
                "setupIcon": `${path.join(__dirname, "/src/img/icon.ico")}`,
                "skipUpdateIcon": true
            }
        }
    ]
};