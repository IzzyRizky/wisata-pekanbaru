// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDauapMUBRWahXVaLQoz1kCqbzyIYiAgDk",
    authDomain: "sign-log-web.firebaseapp.com",
    projectId: "sign-log-web",
    storageBucket: "sign-log-web.appspot.com",
    messagingSenderId: "932513497444",
    appId: "1:932513497444:web:509cecc5134d079165fa71"
};

// Inisialisasi
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
