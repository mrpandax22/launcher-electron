const {BrowserWindow} = require('electron')
const {getConnection} = require('./database')

let window
function createWindow(){
window = new BrowserWindow({
        width:500,
        height:600,
        frame: true,
        resizable:false,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule: true
        }

        
    })
    
    window.loadFile('src/ui/index.html')
}

async function newUser(registro){
try {
    const conn = await getConnection()
    await conn.query('INSERT INTO users SET ?', registro)
} catch (error) {
    console.log(error)
}

}

module.exports = {
    createWindow,
    newUser,
}