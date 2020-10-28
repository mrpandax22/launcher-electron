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
  //  window.setMenuBarVisibility(false)
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


async function appLogin(login){
    try {
        const username = login.username
        
        
        const conn = await getConnection()
        const verif = await conn.query('SELECT username FROM users WHERE username = ?', username, function (error, results, fields){
            const valor = results
            
        })
       
    } catch (error) {       
        console.log("autenticate error ")
    }
}

module.exports = {
    createWindow,
    newUser,
    appLogin,
}