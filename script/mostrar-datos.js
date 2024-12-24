export function mostrarDatos() {
    const seccion = document.getElementById('seccion');
    const titulo = localStorage.getItem('titulo');
    const descripcion = localStorage.getItem('descripcion');
    const fecha = localStorage.getItem('fecha');

    if (titulo && descripcion && fecha) {
        const nuevoElemento = document.createElement('div');
        nuevoElemento.innerHTML = `
            <h3>${titulo}</h3>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>Descripción:</strong> ${descripcion}</p>
        `;
        seccion.appendChild(nuevoElemento);
    }
}