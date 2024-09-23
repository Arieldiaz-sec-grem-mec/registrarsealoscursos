document.addEventListener("DOMContentLoaded", function () {
    fetch('https://script.google.com/macros/s/AKfycbxvtJluQAGkCjdgH8ogBjqWr0jNnlYKqCnGCRqA4T0KMO0YL32Jq5F_FDGmv1xkuadLSg/exec')
        .then(response => response.json())
        .then(cursos => {
            var cursoSelect = document.getElementById("curso");
            cursos.forEach(curso => {
                var option = document.createElement("option");
                option.value = curso;
                option.textContent = curso;
                cursoSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar cursos:', error));
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Registrando...";

    var formData = new FormData(document.getElementById("registrationForm"));

    fetch('https://script.google.com/macros/s/AKfycbxvtJluQAGkCjdgH8ogBjqWr0jNnlYKqCnGCRqA4T0KMO0YL32Jq5F_FDGmv1xkuadLSg/exec', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(text => {
            document.getElementById("status").innerText = "Registro exitoso";
            submitBtn.disabled = false;
            submitBtn.innerText = "Registrar";
            document.getElementById("registrationForm").reset();
        })
        .catch(error => {
            document.getElementById("status").innerText = "Error al registrar. Intenta nuevamente.";
            submitBtn.disabled = false;
            submitBtn.innerText = "Registrar";
        });
});
