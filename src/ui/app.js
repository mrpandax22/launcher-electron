const registerForm = document.getElementById('regform')

const {remote} = require('electron')
const main = remote.require('./main')

const userMail = document.getElementById('email')
const userUsername = document.getElementById('username')
const userPassword = document.getElementById('password')

registerForm.addEventListener('submit', (e) =>{

    const regist = {
        email : userMail.value,
        username: userUsername.value,
        password: userPassword.value
    }

    main.createUser(regist)
})