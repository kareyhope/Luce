// -------------------------------
// Données simulées
// -------------------------------

// Chat familial
const familyMessages = [
    { sender: "Papa", text: "N'oubliez pas que demain on part tôt." },
    { sender: "Maman", text: "Oui, préparez-vous bien ce soir." },
    { sender: "Moi", text: "D’accord c'est noté." }
];

// Membres du foyer
const familyMembers = ["Papa", "Maman", "Moi", "Petit frère"];

// Conversations privées
const privateConversations = [
    { type: "Hébergeur", last: "Document reçu, merci." },
    { type: "Garant", last: "D’accord, je gère cela demain." },
    { type: "Conseiller bancaire", last: "Votre dossier avance." },
    { type: "Proviseur", last: "Bulletin envoyé." },
    { type: "Bailleur", last: "Visite confirmée pour lundi." }
];

// Scolarité - Devoirs et notes
const schoolData = {
    devoirs: [
        { matiere: "Maths", titre: "Exercices chapitre 4", date: "2025-01-12" },
        { matiere: "Français", titre: "Lecture pages 22 à 35", date: "2025-01-13" }
    ],
    notes: [
        { matiere: "Maths", note: "15/20" },
        { matiere: "Histoire", note: "14/20" }
    ]
};

// Budget - Dépenses
const budgetData = [
    { categorie: "Alimentation", montant: 120 },
    { categorie: "Transport", montant: 45 },
    { categorie: "Loisirs", montant: 60 }
];


// -------------------------------
// Elements du DOM
// -------------------------------
const sidebarLeft = document.getElementById("sidebar-left");
const sidebarRight = document.getElementById("sidebar-right");
const mainContent = document.getElementById("main-content");


// -------------------------------
// Changement d’onglets
// -------------------------------
function switchTab(tab) {
    // Retire highlight de tous
    document.querySelectorAll("#sidebar-left ul li").forEach(li => {
        li.classList.remove("active");
    });

    // Active l’onglet sélectionné
    document.getElementById(`${tab}-tab`).classList.add("active");

    // Charge le bon contenu
    if (tab === "chat") loadChat();
    if (tab === "prive") loadPrivate();
    if (tab === "scolarite") loadScolarite();
    if (tab === "budget") loadBudget();
}


// -------------------------------
// SECTION : CHAT FAMILIAL
// -------------------------------
function loadChat() {
    // Sidebar droite = liste membres
    sidebarRight.innerHTML = `
        <h3>Membres du foyer</h3>
        <ul>${familyMembers.map(m => `<li>${m}</li>`).join("")}</ul>
    `;

    // Main Content = messages + input
    mainContent.innerHTML = `
        <h2>Chat Familial</h2>
        <div class="messages">
            ${familyMessages.map(msg => `
                <div class="msg">
                    <strong>${msg.sender} :</strong> ${msg.text}
                </div>
            `).join("")}
        </div>

        <div class="input-zone">
            <input id="chat-input" type="text" placeholder="Écrire un message..." />
            <button onclick="sendMessage()">Envoyer</button>
        </div>
    `;
}

function sendMessage() {
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (text === "") return;

    familyMessages.push({ sender: "Moi", text });

    loadChat();
}


// -------------------------------
// SECTION : CHATS PRIVÉS
// -------------------------------
function loadPrivate() {
    // Sidebar : liste des conversations
    sidebarRight.innerHTML = `
        <h3>Conversations privées</h3>
        <ul>
            ${privateConversations.map(c => `<li>${c.type}</li>`).join("")}
        </ul>
    `;

    // Main content
    mainContent.innerHTML = `
        <h2>Chats privés</h2>
        <div class="private-list">
            ${privateConversations.map(c => `
                <div class="private-item">
                    <strong>${c.type}</strong><br>
                    <span>${c.last}</span>
                </div>
            `).join("")}
        </div>
    `;
}


// -------------------------------
// SECTION : SCOLARITÉ
// -------------------------------
function loadScolarite() {
    // Sidebar : types de données
    sidebarRight.innerHTML = `
        <h3>Scolarité</h3>
        <ul>
            <li>Devoirs</li>
            <li>Notes</li>
        </ul>
    `;

    // Main content
    mainContent.innerHTML = `
        <h2>Scolarité</h2>

        <h3>Devoirs</h3>
        <table class="data-table">
            <tr><th>Matière</th><th>Titre</th><th>Date</th></tr>
            ${schoolData.devoirs.map(d => `
                <tr>
                    <td>${d.matiere}</td>
                    <td>${d.titre}</td>
                    <td>${d.date}</td>
                </tr>
            `).join("")}
        </table>

        <h3>Notes</h3>
        <table class="data-table">
            <tr><th>Matière</th><th>Note</th></tr>
            ${schoolData.notes.map(n => `
                <tr>
                    <td>${n.matiere}</td>
                    <td>${n.note}</td>
                </tr>
            `).join("")}
        </table>
    `;
}


// -------------------------------
// SECTION : BUDGET
// -------------------------------
function loadBudget() {
    sidebarRight.innerHTML = `
        <h3>Catégories</h3>
        <ul>
            ${budgetData.map(b => `<li>${b.categorie}</li>`).join("")}
        </ul>
    `;

    mainContent.innerHTML = `
        <h2>Budget</h2>

        <h3>Dépenses</h3>
        <table class="data-table">
            <tr><th>Catégorie</th><th>Montant (€)</th></tr>
            ${budgetData.map(b => `
                <tr>
                    <td>${b.categorie}</td>
                    <td>${b.montant}</td>
                </tr>
            `).join("")}
        </table>

        <h3>Graphique</h3>
        <div style="height:200px;background:white;border-radius:8px;display:flex;align-items:center;justify-content:center;">
            Graphique (placeholder)
        </div>
    `;
}


// -------------------------------
// Initialisation au chargement
// -------------------------------
window.onload = () => {
    switchTab("chat"); // onglet par défaut
};


function logout() {
    localStorage.removeItem("luce_token");
    window.location.href = "login.html";
}

