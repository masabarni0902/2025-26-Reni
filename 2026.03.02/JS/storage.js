// ES6 modul - LocalStorage helper
export function getUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Ha nincs admin, adjuk hozzá
  if(!users.some(u => u.username === "admin")){
    users.unshift({ 
      id: 1, 
      username: "admin", 
      password: "Admin123!", 
      email: "admin@example.com", 
      role: "admin",
      birthdate: "1970-01-01"
    });
    localStorage.setItem("users", JSON.stringify(users));
  }

  return users;
}

export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
}

export function removeCurrentUser() {
  localStorage.removeItem("currentUser");
}