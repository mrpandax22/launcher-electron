const main = require('electron').remote.require('./main')

const registerForm = document.getElementById('regform');
const userUsername = document.getElementById('username');
const userPassword = document.getElementById('password');



registerForm.addEventListener('submit', (e) =>{

    
    const registro={
        username : userUsername.value,
        password : userPassword.value
    }

    main.newUser(registro);
    
    
})

