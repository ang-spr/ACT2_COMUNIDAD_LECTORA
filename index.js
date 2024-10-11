const nav = document.querySelector('nav ol');

const botones = [
    { texto: '✨Los 5 Libros Más Leídos✨', enlace: 'libros.html' },
    { texto: '✨Algunas Autoras Reconocidas✨', enlace: 'autoras.html' },
    { texto: '✨La Comunidad De Booktok✨', enlace: 'booktok.html' },
    { texto: '✨Reseñas Literarias✨', enlace: 'resenas.html' }
];

function crearBotones() {
    botones.forEach(botonInfo => {
        const li = document.createElement('li');
        
        const boton = document.createElement('button');
        boton.textContent = botonInfo.texto;
        
        boton.addEventListener('click', () => {
            window.location.href = botonInfo.enlace;
        });
        
        li.appendChild(boton);
        
        nav.appendChild(li);
    });
}

crearBotones();

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    if (name === '' || comment === '') {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `<strong>${name}</strong>: ${comment}`; 
    
    document.getElementById('commentsSection').appendChild(commentDiv);

    alert("Comentario enviado correctamente");

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});
