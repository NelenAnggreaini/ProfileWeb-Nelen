// === DARK MODE TOGGLE ===
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// === SIMPAN STATUS DARK MODE ===
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

// === VALIDASI FORM KONTAK ===
const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      statusMessage.textContent = "❌ Semua kolom wajib diisi!";
      statusMessage.style.color = "red";
    } else if (!email.includes("@") || !email.includes(".")) {
      statusMessage.textContent = "⚠️ Masukkan alamat email yang valid.";
      statusMessage.style.color = "orange";
    } else {
      statusMessage.textContent = "✅ Pesan berhasil dikirim! Terima kasih 😊";
      statusMessage.style.color = "green";
      form.reset();
    }
  });
}
