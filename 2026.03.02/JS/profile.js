import { getCurrentUser, getUsers, saveUsers, removeCurrentUser } from './storage.js';

const currentUser = getCurrentUser();

if(!currentUser || currentUser.role !== "user"){
  alert("You must be logged in as user!");
  window.location.href = "../HTML/login.html";
}

function renderProfile(){
  const table = document.getElementById("profileTable");
  table.innerHTML = `
    <tr><th>Field</th><th>Value</th></tr>
    <tr><td>Username</td><td>${currentUser.username}</td></tr>
    <tr><td>Email</td><td>${currentUser.email}</td></tr>
    <tr><td>Birthdate</td><td>${currentUser.birthdate}</td></tr>
  `;
}

renderProfile();

document.getElementById("editBtn").addEventListener("click", ()=>{
  const users = getUsers();
  const user = users.find(u => u.id === currentUser.id);

  const newUsername = prompt("New username:", user.username) || user.username;
  const newEmail = prompt("New email:", user.email) || user.email;

  if(newUsername.length === 0 || newUsername.length > 30){
    alert("Username must be 1-30 characters!");
    return;
  }
  if(!newEmail.includes("@")){
    alert("Email must contain '@'!");
    return;
  }

  user.username = newUsername;
  user.email = newEmail;
  saveUsers(users);
  localStorage.setItem("currentUser", JSON.stringify(user));
  renderProfile();
  alert("Profile updated!");
});

document.getElementById("logoutBtn").addEventListener("click", ()=>{
  removeCurrentUser();
  window.location.href = "../HTML/login.html";
});