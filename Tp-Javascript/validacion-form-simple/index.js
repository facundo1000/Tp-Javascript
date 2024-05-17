const nameInput = document.getElementById('name');
nameInput.addEventListener('submit', function () {
    if (nameInput.textContent == "" || nameInput.textContent == null) {
        alert('Error al ingresar el nombre');
    }
});