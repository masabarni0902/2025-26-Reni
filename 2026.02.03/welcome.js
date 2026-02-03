let userLogged=localStorage.getItem("userLogged")

if(!userLogged){
    window.location.href="login.html"
}
else{
    document.getElementById("greeting").innerHTML="Üdvözöllek: " + userLogged
}

function logout(){
    localStorage.removeItem(userLogged)
    alert("Sikeres kijelentkezés!")
    window.location.href="login.html"
}