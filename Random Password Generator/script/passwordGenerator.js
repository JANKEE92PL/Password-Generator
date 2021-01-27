let alertBox = document.querySelector(".alertBox");
let numberOfCharacters = document.getElementById("setter").defaultValue = "8";
let MaxnumberOfCharacters = document.getElementById("setter").max = "64";


function setpasswordLength() {
    numberOfCharacters = document.getElementById("setter").value;
}

function getPassword(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    let passwordLength = numberOfCharacters;
    let password = "";

    for (let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
        
    }
    numberOfCharacters = 8;
    document.getElementById("passwort").value = password;
    document.querySelector(".copy").classList.add("tada");
    document.querySelector(".copy").classList.add("attention");
    alertBox.innerHTML = "Kopiertes Passwort <br>" + "<h2>" + password + "</h2>";
}

function copyPassword() {
    var copyPassText = document.getElementById("passwort");
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999);
    document.execCommand("copy");
    alertBox.classList.toggle("active")
    setTimeout(function(){
        alertBox.classList.toggle("active");
    },2000)
}
function delPassword() {
    document.getElementById("passwort").value = "";
    alertBox.innerHTML = "Passwort gelöscht !";
    document.getElementById("setter").value = "8";
    document.querySelector(".copy").classList.remove("tada");
    document.querySelector(".copy").classList.remove("attention");
}





