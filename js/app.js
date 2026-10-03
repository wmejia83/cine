//Seleccion de los elementos del DOM que me interesan para trabajar con ellos
const form = document.querySelector("#age-form");
const ageInput = document.querySelector("#age");
const title = document.querySelector("#movie-title");
const description = document.querySelector("#movie-description");
const movie = document.querySelector("#movie");
const ageRange = document.querySelector("#age-range");
const rating = document.querySelector("#rating");
const message = document.querySelector("#message");

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        // obtengo la edad
        const age = Number(ageInput.value);

        if (age < 6 || age > 120) {
            message.textContent =
                "Ingresa una edad válida desde los 6 años.";
            return;
        }

    message.textContent = "";


    // NIÑOS

    if (age >= 6 && age <= 12) {

        title.textContent ="La Isla de las Estrellas";

        description.textContent = "Una aventura divertida donde Sofi y Leo descubren una isla secreta y aprenden el valor de la amistad.";

        ageRange.textContent = "Niños · 6 a 12 años";

        rating.textContent = "★ Valoración: 4.8 / 5";

        movie.style.backgroundImage =
            'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0)), url("img/ninos.png")';
    }


    // JÓVENES

    else if (age <= 17) {

        title.textContent =
            "Código Horizonte";

        description.textContent =
            "Un grupo de amigos descubre un misterio digital que pondrá a prueba su ingenio y trabajo en equipo.";

        ageRange.textContent =
            "Jóvenes · 13 a 17 años";

        rating.textContent =
            "★ Valoración: 4.6 / 5";

        movie.style.backgroundImage =
            'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0)), url("img/jovenes.png")';
    }

    // ADULTOS

    else {

        title.textContent =
            "Ecos de Medianoche";

        description.textContent =
            "Un drama de suspenso donde cada decisión revela secretos del pasado.";

        ageRange.textContent =
            "Adultos · 18 años en adelante";

        rating.textContent =
            "★ Valoración: 4.5 / 5";

        movie.style.backgroundImage =
            'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0)), url("img/adultos.png")';
    }

    }
);
        