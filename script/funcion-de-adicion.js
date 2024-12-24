const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const titulo = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha = document.getElementById('fecha').value;
    
    localStorage.setItem('titulo', titulo);
    localStorage.setItem('descripcion', descripcion);
    localStorage.setItem('fecha', fecha);
    
    formulario.reset();
});