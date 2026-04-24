import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "COLE_SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

window.loginGoogle = async function () {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  if (user.email === "sousafabricyoemannoel@gmail.com") {
    window.location.href = "admin.html";
  } else {
    alert("Login realizado!");
  }
};