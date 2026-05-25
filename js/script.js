// ELEMENTO MENSAJE

const mensaje = document.getElementById("mensaje");

// FUNCIÓN FECHA Y HORA

function actualizarHora() {

    const fecha = new Date();

    // DÍAS

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    // MESES

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    // DATOS

    const diaSemana = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // FORMATO

    minutos = minutos.toString().padStart(2, "0");
    segundos = segundos.toString().padStart(2, "0");

    // SALUDO

    let saludo = "";

    if (hora < 12) {

        saludo = "🌞 Buenos días";

    } else if (hora < 18) {

        saludo = "☀️ Buenas tardes";

    } else {

        saludo = "🌙 Buenas noches";
    }

    // MENSAJE

    mensaje.innerHTML = `

        <strong>${saludo}</strong>

        <br><br>

        📅 ${diaSemana}, ${dia} de ${mes} de ${anio}

        <br><br>

        ⏰ ${hora}:${minutos}:${segundos}

    `;
}

// EJECUTAR

actualizarHora();

// ACTUALIZAR CADA SEGUNDO

setInterval(actualizarHora, 1000);

// SLIDER AUTOMÁTICO

const slider = document.getElementById("imagen-slider");

const imagenes = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"
];

let indice = 0;

// CAMBIAR IMAGEN

function cambiarImagen() {

    slider.style.opacity = 0;

    setTimeout(() => {

        indice++;

        if (indice >= imagenes.length) {

            indice = 0;
        }

        slider.src = imagenes[indice];

        slider.style.opacity = 1;

    }, 500);
}

// CAMBIO AUTOMÁTICO

setInterval(cambiarImagen, 3000);