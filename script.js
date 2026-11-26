
const botones = document.querySelectorAll(".filter");
const proyectos = document.querySelectorAll(".project-card");

function mostrarTrabajos(categoria) {

    proyectos.forEach((proyecto) => {
        if (proyecto.getAttribute("data-category") === categoria) {
            proyecto.classList.remove("hidden");
        } else {
            proyecto.classList.add("hidden");
        }
    });

    botones.forEach((boton) => {
        if (boton.getAttribute("data-filter") === categoria) {
            boton.classList.add("active");
        } else {
            boton.classList.remove("active");
        }
    });
}

botones.forEach((boton) => {
    boton.addEventListener("click", function () {
        const categoria = this.getAttribute("data-filter");
        mostrarTrabajos(categoria);
    });
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}

mostrarTrabajos("escritos");
