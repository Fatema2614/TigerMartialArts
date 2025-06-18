// Import Firebase Auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Get auth instance from global firebaseApp (set up in firebase.js)
const auth = getAuth(window.firebaseApp);

// Login form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful! Welcome " + userCredential.user.email);
    window.location.href="dashboard.html?name="+userCredential.user.email;
    loginForm.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("authModal"));
    modal.hide();
  } catch (error) {
    alert("Login error: " + error.message);
  }
});

// Register form
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const name = document.getElementById("regName").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful! Welcome " + name);
    registerForm.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("authModal"));
    modal.hide();
  } catch (error) {
    alert("Registration error: " + error.message);
  }
});

<script type="module">
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
  const auth = getAuth();

  document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("🎉 Registration successful!");
      document.getElementById("registerForm").reset();
    } catch (error) {
      alert("❌ " + error.message);
    }
  });

  // Login
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login successful!");
      document.getElementById("loginForm").reset();
    } catch (error) {
      alert("❌ " + error.message);
    }
  });
</script>