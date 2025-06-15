import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("signupForm");

    form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Akun berhasil dibuat");
        window.location.href = "login.html";
    })
    .catch((error) => {
        alert("Error: " + error.message);
        });
    });
});
