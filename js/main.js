


function actualizarEntradas(){

    const conciertoLS = localStorage.getItem("lista_conciertos");

    
    if(conciertoLS !== null) {

        
        listaConciertos = JSON.parse(conciertoLS);
    }

    return listaConciertos;
}


function descontarEntradas(cantidad) {

    
    const conciertoElegido = seleccionConcierto.value;

    
    listaDeConcierto.forEach((concierto) => {

        let nombreConcierto = concierto.nombre;
        let entradasConcierto = concierto.entradas;

        
        if (conciertoElegido === nombreConcierto) {

            let entradasRestantes = entradasConcierto

            
            if (entradasRestantes >= cantidad) {

                
                entradasRestantes = entradasConcierto - cantidad;

                
                concierto.entradas = entradasRestantes;

                 
                parrafoNoHayEntradas.className = "no_mostrar";
                siguiente.classList.remove('no_mostrar');
                siguiente.className = "boton";

            } else {

                
                parrafoNoHayEntradas.classList.remove('no_mostrar');
                siguiente.className = "no_mostrar";
            }
        }

    });
}


function obtenerPrecio() {

    
    const conciertoElegido = seleccionConcierto.value;

    
    listaConciertos.forEach((concierto) => {

        let nombreConcierto = concierto.nombre;
        let precioConcierto = concierto.precio;

        if (conciertoElegido === nombreConcierto) {

            
            const precioFInal = precioConcierto * parseInt(seleccionCantidadEntradas.value);

            
            const precioFinalColor = document.createElement("p");
            precioFinalColor.innerText = `Total:`;
            precioFinalColor.className = "parrafo_datos_color_total";
            muestraDatos.append(precioFinalColor);


            const mostrarTotal = document.createElement("p");
            mostrarTotal.innerText = `$${precioFInal}`;
            mostrarTotal.className = "parrafo_datos";
            muestraDatos.append(mostrarTotal);
        }
    });
}


function mostrarDatos() {

    
    const conciertoElegido = seleccionConcierto.value;

    
    listaConciertos.forEach((concierto) => {

        let eventoConcierto = concierto.nombre;
        let fechaConcierto = concierto.fecha;
        let horarioConcierto = concierto.horario;
        let ubicacionConcierto = concierto.ubicacion;
        let precioConcierto = concierto.precio;
        
        if (conciertoElegido === eventoConcierto) {

            
            const eventoColor = document.createElement("p");
            eventoColor.innerText = `Evento: `;
            eventoColor.className = "parrafo_datos_color";
            muestraDatos.append(eventoColor);

            const mostrarEvento = document.createElement("p");
            mostrarEvento.innerText = `${eventoConcierto}`;
            mostrarEvento.className = "parrafo_datos";
            muestraDatos.append(mostrarEvento);

            
            const fechaColor = document.createElement("p");
            fechaColor.innerText = `Fecha: `;
            fechaColor.className = "parrafo_datos_color";
            muestraDatos.append(fechaColor);

            const mostrarFecha = document.createElement("p");
            mostrarFecha.innerText = `${fechaConcierto}`;
            mostrarFecha.className = "parrafo_datos";
            muestraDatos.append(mostrarFecha);

            
            const horarioColor = document.createElement("p");
            horarioColor.innerText = `Horario: `;
            horarioColor.className = "parrafo_datos_color";
            muestraDatos.append(horarioColor);

            const mostrarHorario = document.createElement("p");
            mostrarHorario.innerText = `${horarioConcierto}`;
            mostrarHorario.className = "parrafo_datos";
            muestraDatos.append(mostrarHorario);

            
            const ubicacionEvento = document.createElement("p");
            ubicacionEvento.innerText = `Ubicacion: `;
            ubicacionEvento.className = "parrafo_datos_color";
            muestraDatos.append(ubicacionEvento);

            const mostrarUbicacion = document.createElement("p");
            mostrarUbicacion.innerText = `${ubicacionConcierto}`;
            mostrarUbicacion.className = "parrafo_datos";
            muestraDatos.append(mostrarUbicacion);

            
            const precioColor = document.createElement("p");
            precioColor.innerText = `Precio:`;
            precioColor.className = "parrafo_datos_color";
            muestraDatos.append(precioColor);


            const mostrarPrecio = document.createElement("p");
            mostrarPrecio.innerText = `$${precioConcierto}`;
            mostrarPrecio.className = "parrafo_datos";
            muestraDatos.append(mostrarPrecio);
        }
    });
}

//  function obtenerReservas() {

//      const reservasLS = localStorage.getItem("reservas");

//      if (reservasLS !== null) {
//          return JSON.parse(reservasLS);
//      }

//     return [];
//  }


function validarDatosDeLaPersona(nombre, apellido, telefono, email) {

    let todoCorrecto = true;

    
    if (todoCorrecto === true || todoCorrecto === false) {

        const textosInvalidar = document.getElementsByTagName("small");

        for (const texto of textosInvalidar) {

            texto.className = "no_mostrar"
        }
    }

    
    if (nombre === "") {

        const nombreInvalido = document.createElement("small");
        nombreInvalido.innerText = `*Complete este campo.`;
        nombreInvalido.className = "texto_validar";

        contenedorNombre.append(nombreInvalido);

        todoCorrecto = false;
    }

    
    if (apellido === "") {

        const apellidoInvalido = document.createElement("small");
        apellidoInvalido.innerText = `*Complete este campo.`;
        apellidoInvalido.className = "texto_validar";

        contenedorApellido.append(apellidoInvalido);

        todoCorrecto = false;
    }


    
    if (telefono === "") {

        const telefonoInvalido = document.createElement("small");
        telefonoInvalido.innerText = `*Complete este campo.`;
        telefonoInvalido.className = "texto_validar";

        contenedorTelefono.append(telefonoInvalido);

        todoCorrecto = false;

        
    } else if (parseInt(telefono.length) > 10 || parseInt(telefono.length) < 10) {

        const telefonoInvalido = document.createElement("small");
        telefonoInvalido.innerText = `*Debe ingrear 10 digitos.`;
        telefonoInvalido.className = "texto_validar";

        contenedorTelefono.append(telefonoInvalido);

        todoCorrecto = false;

    }

    
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

        
    if (email === "") {

        const emailInvalido = document.createElement("small");
        emailInvalido.innerText = `*Complete este campo.`;
        emailInvalido.className = "texto_validar";

        contenedorEmail.append(emailInvalido);

        todoCorrecto = false;

            
    } else if (!expresion.test(email)) {

        const emailInvalido = document.createElement("small");
        emailInvalido.innerText = `*Correo invalido.`;
        emailInvalido.className = "texto_validar";

        contenedorEmail.append(emailInvalido);

        todoCorrecto = false;
    }

    return todoCorrecto;
}


function validarDatosDeLaTarjeta(selectorTarjeta, numeroTarjeta, codigoDeSeguridad, titular, selectorMesTarjeta) {

    let todoCorrecto = true;

    
    if (todoCorrecto === true || todoCorrecto === false) {

        const textosInvalidar = document.getElementsByTagName("small");

        for (const texto of textosInvalidar) {

            texto.className = "no_mostrar"
        }
    }

    
    if (selectorTarjeta == null || selectorTarjeta == 0) {

        const tarjetaInvalida = document.createElement("small");
        tarjetaInvalida.innerText = `*Elija una opción.`;
        tarjetaInvalida.className = "texto_validar";

        contenedorTarjeta.append(tarjetaInvalida);

        todoCorrecto = false;
    }


    
    if (numeroTarjeta === "") {

        const numeroInvalido = document.createElement("small");
        numeroInvalido.innerText = `*Complete este campo.`;
        numeroInvalido.className = "texto_validar";

        contenedorNumeroDeTarjeta.append(numeroInvalido);

        todoCorrecto = false;

        
    } else if (parseInt(telefono.length) > 16 || parseInt(telefono.length) < 16) {

        const numeroInvalido = document.createElement("small");
        numeroInvalido.innerText = `*Inserte los 16 digitos.`;
        numeroInvalido.className = "texto_validar";

        contenedorNumeroDeTarjeta.append(numeroInvalido);

        todoCorrecto = false;
    }

    
    if (codigoDeSeguridad === "") {

        const codigoSeguridadInvalido = document.createElement("small");
        codigoSeguridadInvalido.innerText = `*Complete este campo.`;
        codigoSeguridadInvalido.className = "texto_validar";

        contenedorCodigoDeSeguridad.append(codigoSeguridadInvalido);

        todoCorrecto = false;

        
    } else if (parseInt(codigoDeSeguridad.length) > 3 || parseInt(codigoDeSeguridad.length) < 3) {

        const codigoSeguridadInvalido = document.createElement("small");
        codigoSeguridadInvalido.innerText = `*Inserte los 3 digitos.`;
        codigoSeguridadInvalido.className = "texto_validar";

        contenedorCodigoDeSeguridad.append(codigoSeguridadInvalido);

        todoCorrecto = false;
    }


    
    if (titular === "") {

        const titularInvalido = document.createElement("small");
        titularInvalido.innerText = `*Complete este campo.`;
        titularInvalido.className = "texto_validar";

        contenedorTitularTarjeta.append(titularInvalido);

        todoCorrecto = false;
    }


    
    if (selectorMesTarjeta == null || selectorMesTarjeta == 0) {

        const mesInvalido = document.createElement("small");
        mesInvalido.innerText = `*Elija una opción.`;
        mesInvalido.className = "texto_validar";

        selectorMesTarjeta.append(mesInvalido);

        todoCorrecto = false;
    }

    return todoCorrecto;
}


// OBJETOS

// creo array que concieten los objetos conciertos
let listaConciertos = [];

// agrego los objetos al array.
listaConciertos.push(new Concierto("WOS - Oscuro extasis", "04/11/2023", "19:30", 2000, "AV. Santa FE 3069 - C.A.B.A", 500));

listaConciertos.push(new Concierto("Los Cafres - El Regreso del Poblano", "20/10/2023", "20:00", 2500, "AV. Santa Fe 3069- C.A.B.A", 500));

listaConciertos.push(new Concierto("Memphis La Blusera - 25th Aniversario,", "29/10/2023", "19:30", 1000, "AV. Santa Fe 3069 - C.A.B.A", 500));

listaConciertos.push(new Concierto("Charly Sinfonico - Musica para Volar", "21/11/2023", "21:00", 800, "AV. Santa Fe 3069 - C.A.B.A", 500));

listaConciertos.push(new Concierto("JAF - 50 Años", "29/11/2023", "21:00", 1000, "AV. Santa Fe 3069 - C.A.B.A", 500));

listaConciertos.push(new Concierto("Nito Mestre - 50 años de Vida ", "20/12/2023", "21:00", 1200, "AV. Santa Fe 3069 - C.A.B.A", 500));



// VARIABLES GLOBALES

const botonComprar = document.getElementById("boton_comprar");
const botonSiguiente = document.getElementById("boton_siguiente");
const formularioDatos = document.getElementById("boton_paso4");
const formularioPago = document.getElementById("pagar");
const recargaPagina = document.getElementById("volver");

const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const paso3 = document.getElementById("paso3");
const siguiente = document.getElementById("siguiente");
const paso4 = document.getElementById("paso4");
const parrafoNoHayEntradas = document.getElementById("cantidad_parrafo");
const paso5 = document.getElementById("paso5");
const muestraDatos = document.getElementById("muestra_datos");
const finalizarCompra = document.getElementById("finalizar_compra");

const seleccionConcierto = document.getElementById("concierto");
const seleccionFecha = document.getElementById("fecha_concierto");
const seleccionCantidadEntradas = document.getElementById("cantidad_entradas");
const selectorTarjeta = document.getElementById("medio_pago");
const selectorMesTarjeta = document.getElementById("mes_tarjeta");
const selectorAnioTarjeta = document.getElementById("año_tarjeta");

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("email");
const inputNumeroDeTarjeta = document.getElementById("numero_tarjeta");
const inputCodigoDeSeguridadTarjeta = document.getElementById("codigo_seguridad");
const inputTitularDeLaTarjeta = document.getElementById("titular_tarjeta");

const contenedorNombre = document.getElementById("contenedor_input_nombre");
const contenedorApellido = document.getElementById("contenedor_input_apellido");
const contenedorTelefono = document.getElementById("contenedor_input_telefono");
const contenedorEmail = document.getElementById("contenedor_input_email");
const contenedorTarjeta = document.getElementById("contenedor_tarjeta");
const contenedorNumeroDeTarjeta = document.getElementById("contenedor_numero_tarjeta");
const contenedorCodigoDeSeguridad = document.getElementById("contenedor_codigo_seguridad");
const contenedorTitularTarjeta = document.getElementById("contenedor_titular_tarjeta");

const listaDeConcierto = actualizarEntradas();





for (const concierto of listaConciertos) {

    
    const opcionConcierto = document.createElement("option");
    opcionConcierto.innerText = concierto.nombre;

    seleccionConcierto.append(opcionConcierto);
}


for (let i = 1; i <= 12; i++) {

    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;

    selectorMesTarjeta.append(opcion);
}


const añoActual = new Date().getFullYear();

for (let i = añoActual; i <= añoActual + 10; i++) {

    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;

    selectorAnioTarjeta.append(opcion);
}


botonComprar.addEventListener("click", () => {


    paso1.classList.remove('no_mostrar');
});




seleccionConcierto.addEventListener("change", (e) => {

    
    if (seleccionConcierto.value !== "") {

        
        paso2.className = "";
        paso3.className = "";


        
        const target = e.target;
        const valor = target.value;

        
        const nombreConcierto = listaDeConcierto.find((concierto) => {

            return concierto.nombre === valor;
        });


        
        if (valor === nombreConcierto.nombre) {

            
            seleccionFecha.innerHTML = "";

            
            const opcionFecha = document.createElement("option");

            
            opcionFecha.innerText = nombreConcierto.fecha;

            
            seleccionFecha.append(opcionFecha);
        }


    } else {
        
        paso2.className = "no_mostrar";
        paso3.className = "no_mostrar";
    }
});


seleccionCantidadEntradas.addEventListener("change", (e) => {

    
    const target = e.target;
    const cantidadEntradas = target.value;

    
    if(seleccionCantidadEntradas.value === "0"){

        
        siguiente.className = "no_mostrar";
        parrafoNoHayEntradas.remove();

    }else{

        
        descontarEntradas(cantidadEntradas);
    }

});




botonSiguiente.addEventListener("click", () => {

    
    paso4.classList.remove('no_mostrar');

        
    
    paso1.className = ("no_mostrar")
    paso2.className = ("no_mostrar")
    paso3.className = ("no_mostrar")


});



formularioDatos.addEventListener("click", (event) => {

    
    event.preventDefault();
    
    const cantidadEntradas = seleccionCantidadEntradas.value;
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const email = inputEmail.value;
    const telefono = inputTelefono.value;


    
    if (validarDatosDeLaPersona(nombre, apellido, telefono, email)) {

        
        const nombreApellidoColor = document.createElement("p");
        nombreApellidoColor.innerText = `Nombre y Apellido: `;
        nombreApellidoColor.className = "parrafo_datos_color";
        muestraDatos.append(nombreApellidoColor);

        const mostrarNombreYApellido = document.createElement("p");
        mostrarNombreYApellido.innerText = `${nombre} ${apellido}`;
        mostrarNombreYApellido.className = "parrafo_datos";
        muestraDatos.append(mostrarNombreYApellido);

        
        const emailColor = document.createElement("p");
        emailColor.innerText = `Email: `;
        emailColor.className = "parrafo_datos_color";
        muestraDatos.append(emailColor);

        const mostrarEmail = document.createElement("p");
        mostrarEmail.innerText = `${email}`;
        mostrarEmail.className = "parrafo_datos";
        muestraDatos.append(mostrarEmail);

        
        mostrarDatos();

        
        const cantidadEntradasColor = document.createElement("p");
        cantidadEntradasColor.innerText = `Cantidad de Entradas: `;
        cantidadEntradasColor.className = "parrafo_datos_color";
        muestraDatos.append(cantidadEntradasColor);

        const mostrarCantidadEntradas = document.createElement("p");
        mostrarCantidadEntradas.innerText = `${cantidadEntradas}`;
        mostrarCantidadEntradas.className = "parrafo_datos";
        muestraDatos.append(mostrarCantidadEntradas);

        
        obtenerPrecio();
        
        
        paso5.classList.remove('no_mostrar');

    
        inputNombre.value = "";
        inputApellido.value = "";
        inputEmail.value = "";
        inputTelefono.value = "";

        
        paso4.className = ("no_mostrar")
    }
});

 
formularioPago.addEventListener("click", (event) => {

    
    event.preventDefault();

    
    const tarjetaElegida = selectorTarjeta.value;
    const numeroDeTarjeta = inputNumeroDeTarjeta.value;
    const codigoDeSeguridadTarjeta = inputCodigoDeSeguridadTarjeta.value;
    const titularTarjeta = inputTitularDeLaTarjeta.value;
    const vencimientoTarjetaMes = selectorMesTarjeta.value;
    

    
    if (validarDatosDeLaTarjeta(tarjetaElegida, numeroDeTarjeta, codigoDeSeguridadTarjeta, titularTarjeta, vencimientoTarjetaMes)) {
        
        
        finalizarCompra.classList.remove('no_mostrar');

        
        selectorTarjeta.value = "";
        inputNumeroDeTarjeta.value = "";
        inputCodigoDeSeguridadTarjeta.value = "";
        inputTitularDeLaTarjeta.value = "";
        selectorMesTarjeta.value = "";
        selectorAnioTarjeta.value = "";

            
    
        paso5.className = ("no_mostrar");
        botonComprar.className = ("no_mostrar");


        
        localStorage.setItem("lista_conciertos",JSON.stringify(listaConciertos));
    }
});

recargaPagina.addEventListener('click', _ => {

    location.reload();
})
