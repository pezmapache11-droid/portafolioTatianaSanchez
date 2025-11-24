document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor llena todos los campos");
    } else {
        alert(`Bienvenido, ${username}`);
    }
});

document.getElementById("registerLink").addEventListener("click", function() {
    alert("Página de registro en construcción...");
});
