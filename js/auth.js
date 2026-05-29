// auth.js - hanterar autentisering och tokenhantering
// Gemensamma funktioner för inloggning, registrering och dashboard
const API = "http://localhost:3000/api";

// Funktioner för tokenhantering
function getToken() {
    return localStorage.getItem("token");
}

// Funktion för att spara token i localStorage
function setToken(token) {
    localStorage.setItem("token", token);
}

// Funktion för att ta bort token och logga ut
function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

// Funktion för att kontrollera om användaren är inloggad, annars omdirigera till login
function checkAuth() {
    const token = getToken();

    // Om ingen token finns, omdirigera till login
    if (!token) {
        window.location.href = "login.html";
    }
}