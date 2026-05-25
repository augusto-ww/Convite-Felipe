// Importa os módulos necessários diretamente da CDN oficial do Firebase (Versão 11)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Suas credenciais oficiais do Firebase Firestore
const firebaseConfig = {
  apiKey: "AIzaSyCUXPAGLZp48JycRIsJ3PgcFBszwCOqTkM",
  authDomain: "aniversario-felipe.firebaseapp.com",
  projectId: "aniversario-felipe",
  storageBucket: "aniversario-felipe.firebasestorage.app",
  messagingSenderId: "1019928672886",
  appId: "1:1019928672886:web:30ced2b163ae3ab80f3d57"
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore (Banco de Dados) e o exporta para ser usado pelos outros arquivos
export const db = getFirestore(app);
