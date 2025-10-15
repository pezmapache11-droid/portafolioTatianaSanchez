
document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const term = document.getElementById("searchInput").value.trim();
    if (term) {
        alert("Buscando: " + term);
    } else {
        alert("Por favor, escribe algo para buscar.");
    }
});

document.getElementById("signIn").addEventListener("click", () => {
    alert("Iniciar sesión pronto disponible.");
});

document.getElementById("register").addEventListener("click", () => {
    alert("Registro de usuario próximamente.");
});
