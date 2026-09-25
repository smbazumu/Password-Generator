let password = document.getElementById("password")
let length = document.getElementById("length")

function generatePassword() {
    const num = length.value
    const alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=?"
    let random
    
    let passwordLetters = ""
    for (let i = 0; i < num; i++) {
        random = Math.floor(Math.random() * 67)
        passwordLetters += alph[random]
    }
    password.value = passwordLetters
}

function copyPassword() {
    navigator.clipboard.writeText(password.value)
    .then(() => (
        alert("Password copied")
    ))
}

document.addEventListener("keydown", function(event) {
    const key = event.key
    
    if (key === "Enter") {
        generatePassword()
    }
})