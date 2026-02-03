let users = JSON.parse(localStorage.getItem("users")) || []

function register(){
    let username=document.getElementById("username").value.trim()
    let password=document.getElementById("password").value.trim()

    if (username=="" || password==""){
        alert("Minden adatot adj meg!")
        return
    }

    let user={
        username:username,
        password:password
    }

    users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    console.log(users);
    alert("Sikeres regisztráció!")
    
    window.location.href="login.html"
    
}