document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.querySelector(".btn-signup");
  const loginBtn = document.querySelector(".btn-login");
  const logoutBtn = document.querySelector(".btn-logout");

  // Sign up / Login click
  signupBtn?.addEventListener("click", () => {
    window.location.href = "signup.html";
  });

  loginBtn?.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});




// 🔹 Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

// 🔹 DOM elements
const signupBtn = document.querySelector(".btn-signup");
const loginBtn = document.querySelector(".btn-login");
const logoutBtn = document.querySelector(".btn-logout");

const modal = document.querySelector(".login-modal");
const closeModal = document.querySelector(".close");
const loginEmailBtn = document.querySelector(".btn-login-email");
const googleLoginBtn = document.querySelector(".btn-login-google");
const facebookLoginBtn = document.querySelector(".btn-login-facebook");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");

// 🔹 Show/hide modal
loginBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));

// 🔹 Login functions
function loginWithGoogle() { auth.signInWithPopup(googleProvider).catch(console.error); }
function loginWithFacebook() { auth.signInWithPopup(facebookProvider).catch(console.error); }
function loginWithEmail() { 
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.signInWithEmailAndPassword(email, password).catch(console.error);
}

// 🔹 Signup with Email
function signupWithEmail() { 
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.createUserWithEmailAndPassword(email, password).catch(console.error);
}

// 🔹 Logout
function logoutUser() { auth.signOut(); }

// 🔹 Attach button events
loginEmailBtn?.addEventListener("click", loginWithEmail);
googleLoginBtn?.addEventListener("click", loginWithGoogle);
facebookLoginBtn?.addEventListener("click", loginWithFacebook);
logoutBtn?.addEventListener("click", logoutUser);

// 🔹 Auth state observer
auth.onAuthStateChanged(user => {
  if (user) {
    signupBtn?.classList.add("hidden");
    loginBtn?.classList.add("hidden");
    logoutBtn?.classList.remove("hidden");
    modal.classList.add("hidden"); // hide modal if logged in
  } else {
    signupBtn?.classList.remove("hidden");
    loginBtn?.classList.remove("hidden");
    logoutBtn?.classList.add("hidden");
  }
});


// Sign up with Email
function signupWithEmail() { 
  const email = document.querySelector(".signup-email").value;
  const password = document.querySelector(".signup-password").value;
  auth.createUserWithEmailAndPassword(email, password).catch(console.error);
}

// Sign up button events
document.querySelector(".btn-signup-email")?.addEventListener("click", signupWithEmail);
document.querySelector(".btn-signup-google")?.addEventListener("click", () => auth.signInWithPopup(googleProvider).catch(console.error));
document.querySelector(".btn-signup-facebook")?.addEventListener("click", () => auth.signInWithPopup(facebookProvider).catch(console.error));



auth.onAuthStateChanged(user => {
  if(user){
    document.querySelector(".btn-signup")?.classList.add("hidden");
    document.querySelector(".btn-login")?.classList.add("hidden");
    document.querySelector(".btn-logout")?.classList.remove("hidden");
  } else {
    document.querySelector(".btn-signup")?.classList.remove("hidden");
    document.querySelector(".btn-login")?.classList.remove("hidden");
    document.querySelector(".btn-logout")?.classList.add("hidden");
  }
});

