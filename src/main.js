const {BrowserWindow} = require('electron')

let window
function createWindow(){
window = new BrowserWindow({
        width:500,
        height:600,
        frame: true,
        resizable:false,
        webPreferences:{
            nodeIntegration:true
        }
    })
    window.setMenuBarVisibility(false)
    window.loadFile('src/ui/index.html')
}

const {getConnection} = require('./database')

function createUser(regist){

    const conn = getConnection();

    console.log(regist)

}

module.exports = {
    createWindow,
    createUser
}