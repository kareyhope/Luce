// ----- Changer selon ton backend -----
const API_URL = "http://localhost:4000";

function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// ------------------ LOGIN -------------------
async function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("luce_token", data.token);
        window.location.href = "index.html";
    } else {
        alert("Identifiants incorrects");
    }
}

// ------------------ REGISTER -------------------
async function register() {
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
        alert("Compte créé. Connectez-vous.");
        showLogin();
    } else {
        alert("Erreur : " + data.error);
    }
}
