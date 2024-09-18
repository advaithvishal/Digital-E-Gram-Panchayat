import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// User Registration
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User registered!");
    })
    .catch((error) => {
      console.error(error.message);
    });
});

// User Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      showSection('services'); // Redirect to services after login
    })
    .catch((error) => {
      console.error(error.message);
    });
});

// User Logout
function logout() {
  signOut(auth)
    .then(() => {
      alert("Logged out!");
    })
    .catch((error) => {
      console.error(error.message);
    });
}
