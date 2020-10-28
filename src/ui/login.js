const main = require('electron').remote.require('./main')


const loginForm = document.getElementById('logform');
const userUsername = document.getElementById('username');
//const userPassword = document.getElementById('password');

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    const login={
        username : userUsername.value,
        //password : userPassword.value,
    }

    main.appLogin(login);
    
    
})