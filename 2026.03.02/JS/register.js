import { getUsers, saveUsers } from '..JS/storage.js';

const form = document.getElementById("registerForm");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;

    const users = getUsers();

    // Validációk
    if(username.length === 0 || username.length > 30){
      alert("Username must be 1-30 characters!");
      return;
    }
    if(!email.includes("@")){
      alert("Email must contain '@'!");
      return;
    }
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if(!pwRegex.test(password)){
      alert("Password must be at least 8 chars and include uppercase, lowercase, number, special char!");
      return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    if(today.getMonth() < birthDateObj.getMonth() || 
       (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())){
      age--;
    }
    if(age < 14){
      alert("You must be at least 14 years old!");
      return;
    }

    if(username.toLowerCase() === "admin"){
      alert("Cannot register as admin!");
      return;
    }

    if(users.some(u => u.username === username)){
      alert("Username already exists!");
      return;
    }

    const newUser = {
      id: users.length ? users[users.length-1].id + 1 : 2,
      username,
      email,
      password,
      birthdate,
      role: "user"
    };

    users.push(newUser);
    saveUsers(users);

    console.log("New user registered:", newUser);
    console.table(users);

    alert("Registration successful! You can now login.");
    window.location.href = "../JS/register.js";
  });
}