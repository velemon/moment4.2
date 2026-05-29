// dashboard.js - hanterar data på dashboard-sidan
async function loadData() {
    // Hämta token från localStorage
    const token = localStorage.getItem("token");

    // Hämta data från skyddad endpoint
    const res = await fetch("http://localhost:3000/api/profile", {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const data = await res.json();

    // Visa data på sidan
    document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
}