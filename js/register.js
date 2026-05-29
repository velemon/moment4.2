// register.js - hanterar registrering av nya användare
// Hämta formulärelement
async function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Skicka registreringsförfrågan till backend
    const res = await fetch("http://localhost:3000/api/auth/register", {
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

    // Visa ett meddelande baserat på svaret från backend
    alert(data.message || "Registered");
}