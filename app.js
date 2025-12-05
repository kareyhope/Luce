// Sélecteurs utiles
const menuItems = document.querySelectorAll('.menu-item');
const mainContent = document.getElementById('mainContent');
const secondarySidebar = document.getElementById('secondarySidebar');

// Simulations de données
const chatFamilialMessages = [
    { auteur: "Maman", message: "N'oubliez pas votre rendez-vous demain." },
    { auteur: "Moi", message: "Merci, c’est noté." },
    { auteur: "Papa", message: "On s'organise comment pour ce week-end ?" }
];

const membresFamille = ["Maman", "Papa", "Moi", "Petit frère"];

const conversationsPrivees = [
    "Hébergeur",
    "Garant",
    "Conseiller bancaire",
    "Proviseur",
    "Bailleur"
];

const notesEtDevoirs = [
    { type: "Devoir", matiere: "Maths", contenu: "Exercices 12 à 18", date: "15/12" },
    { type: "Note", matiere: "Anglais", contenu: "15/20", date: "10/12" }
];

const budgetDepenses = [
    { categorie: "Courses", montant: 80 },
    { categorie: "Transport", montant: 40 },
    { categorie: "Internet", montant: 25 }
];

// Fonction d’affichage selon l’onglet
function loadSection(section) {
    // Reset active menu
    menuItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    switch (section) {
        case "chat":
            loadChatFamilial();
            break;
        case "prive":
            loadChatPrives();
            break;
        case "scolarite":
            loadScolarite();
            break;
        case "budget":
            loadBudget();
            break;
    }
}

// =============== CHAT FAMILIAL ==================
function loadChatFamilial() {
    secondarySidebar.innerHTML = `
        <h3>Membres du chat</h3>
        <ul>
            ${membresFamille.map(m => `<li>${m}</li>`).join('')}
        </ul>
    `;

    mainContent.innerHTML = `
        <h2>Chat familial</h2>
        <div class="chat-box">
            ${chatFamilialMessages.map(msg => `
                <p><strong>${msg.auteur} :</strong> ${msg.message}</p>
            `).join('')}
        </div>

        <div class="input-zone">
            <input type="text" id="messageInput" placeholder="Écrire un message...">
            <button onclick="envoyerMessage()">Envoyer</button>
        </div>
    `;
}

// Envoi d’un message (simple simulation)
function envoyerMessage() {
    const input = document.getElementById('messageInput');
    if (input.value.trim() === "") return;

    chatFamilialMessages.push({ auteur: "Moi", message: input.value });

    loadChatFamilial();
    input.value = "";
}

// =============== CONVERSATIONS PRIVEES ================
