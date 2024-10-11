document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Inicio').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('Final').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

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
