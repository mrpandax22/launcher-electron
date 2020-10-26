const main = require('electron').remote.require('./main')

const registerForm = document.getElementById('regform');
const userUsername = document.getElementById('username');
const userPassword = document.getElementById('password');
const userEmail = document.getElementById('email');


registerForm.addEventListener('submit', (e) =>{

    
    const registro={
        username : userUsername.value,
        password : userPassword.value,
        email : userEmail.value
    }

    main.newUser(registro);
    
    
})

