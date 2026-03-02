import { getUsers, setCurrentUser } from '../JS/storage.js ';

const form = document.getElementById("loginForm");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    console.log("Trying to login:", username);

    const user = getUsers().find(u => u.username === username && u.password === password);

    if(!user){
      alert("Incorrect username or password!");
      return;
    }

    setCurrentUser(user);
    console.log("Logged in user:", user);

    if(user.role === "admin"){
     window.location.href = "../JS/admin.js";
      alert("Admin Succes!")
    } else {
      window.location.href = "../JS/login.js";
      alert("Profile Succes!")
    }
  });
}