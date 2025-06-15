import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js';

const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Login berhasil:', userCredential.user);
            window.location.href = 'index.html'; // arahkan ke halaman utama
        })
        .catch((error) => {
            console.error('Login gagal:', error.message);
            alert("Login gagal: " + error.message);
        });
});
