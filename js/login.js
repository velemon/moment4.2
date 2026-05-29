// login.js - hanterar inloggning
async function login() {
    // Hämta användarnamn och lösenord från formuläret
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Skicka inloggningsförfrågan till backend
    const res = await fetch("http://localhost:3000/api/auth/login", {
        // Använd POST-metoden och skicka data som JSON
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Skicka användarnamn och lösenord i request body
        body: JSON.stringify({ username, password })
    });

    // Vänta på svaret och konvertera det till JSON
    const data = await res.json();

    // Om backend returnerar en token, spara den i localStorage och omdirigera till dashboard
    if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
        // Annars, visa ett felmeddelande
    } else {
        alert("Login failed");
    }
}