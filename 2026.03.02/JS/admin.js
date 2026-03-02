// admin.js - ES6 modul
import { getUsers, saveUsers, getCurrentUser, removeCurrentUser } from '../JS/storage.js';

// Aktuális user ellenőrzése
const currentUser = getCurrentUser();
if(!currentUser || currentUser.role !== "admin"){
  alert("You must be admin!");
  window.location.href = "login.html";
}

// -----------------------------
// Táblázat renderelése
// -----------------------------
function renderAdminTable(){
  const table = document.getElementById("adminTable");
  const users = getUsers(); // Felhasználók betöltése

  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Email</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  `;

  users.forEach(user => {
    table.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button onclick="editUser(${user.id})">Edit</button>
          ${user.role !== "admin" ? `<button onclick="deleteUser(${user.id})">Delete</button>` : ''}
        </td>
      </tr>
    `;
  });
}

// Inicializálás
renderAdminTable();

// -----------------------------
// Felhasználó szerkesztése
// -----------------------------
window.editUser = function(id){
  const users = getUsers();
  const user = users.find(u => u.id === id);
  if(!user) return;

  const newUsername = prompt("New username:", user.username) || user.username;
  const newEmail = prompt("New email:", user.email) || user.email;
  const newRole = prompt("New role (admin/user):", user.role) || user.role;

  // Validációk
  if(newUsername.toLowerCase() === "admin" && user.id !== 1){
    alert("Cannot change username to admin!");
    return;
  }
  if(!newEmail.includes("@")){
    alert("Email must contain '@'!");
    return;
  }

  user.username = newUsername;
  user.email = newEmail;
  user.role = newRole;

  saveUsers(users);
  renderAdminTable();
}

// -----------------------------
// Felhasználó törlése
// -----------------------------
window.deleteUser = function(id){
  if(id === 1){
    alert("Cannot delete main admin!");
    return;
  }
  if(!confirm("Delete this user?")) return;

  const users = getUsers().filter(u => u.id !== id);
  saveUsers(users);
  renderAdminTable();
}

// -----------------------------
// Logout gomb
// -----------------------------
document.getElementById("logoutBtn").addEventListener("click", ()=>{
  removeCurrentUser();
  window.location.href = ".login.html";
});