let users = JSON.parse(localStorage.getItem("users")) || []

function login(){
    let username=document.getElementById("username").value.trim()
    let password=document.getElementById("password").value.trim()

    let found =false
    for (let i=0;i<users.length;i++){
        if (users[i].username == username && users[i].password== password){
            found = true
            localStorage.setItem("userLogged",username)
            break
        }
    }

    if (found){
        window.location.href="welcome.html"
    }
    else{
        alert("Hibás felhasználónév vagy jelszó!")
    }
}