document.querySelectorAll(".input-box input").forEach(input => {
    input.addEventListener("focus", () => {
        input.parentElement.style.background = "rgba(255,255,255,0.45)";
    });

    input.addEventListener("blur", () => {
        input.parentElement.style.background = "rgba(255,255,255,0.3)";
    });
});
