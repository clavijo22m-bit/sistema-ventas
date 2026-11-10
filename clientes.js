const formularioCliente = document.querySelector("#formulario-cliente");
const listaClientes = document.querySelector("#lista-clientes");
const mensajeRegistro = document.querySelector("#mensaje-registro");
const avisoSinClientes = document.querySelector("#sin-clientes");

formularioCliente.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const datos = new FormData(formularioCliente);
    const cliente = {
        nombre: datos.get("nombre").trim(),
        documento: datos.get("documento").trim(),
        correo: datos.get("correo").trim(),
        telefono: datos.get("telefono").trim()
    };

    const fila = listaClientes.insertRow();
    Object.values(cliente).forEach((valor) => {
        fila.insertCell().textContent = valor;
    });

    avisoSinClientes.hidden = true;
    mensajeRegistro.textContent = "Cliente registrado correctamente.";
    formularioCliente.reset();
    formularioCliente.elements.nombre.focus();
});
