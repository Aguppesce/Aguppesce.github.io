document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateLogin();
});

// Validación de inicio de sesión usando expresiones regulares
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    // Expresión regular para el nombre de usuario: alfanumérico, entre 4 y 20 caracteres
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;

    // Expresión regular para la contraseña: al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!usernameRegex.test(username)) {
        loginMessage.textContent = 'El nombre de usuario debe ser alfanumérico y tener entre 4 y 20 caracteres.';
    } else if (!passwordRegex.test(password)) {
        loginMessage.textContent = 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.';
    } else {
        loginMessage.textContent = '';
        alert('Inicio de sesión exitoso.');
        // Aquí puedes redirigir a otra sección o realizar otra acción
    }
}

// Conexión a la API de TMDb y mostrar películas
function fetchMovies() {
    const apiKey = '67274a3f8164ffba75aca52f55f67551'; // Reemplaza con tu clave API de TMDb
    const moviesGrid = document.getElementById('movies-grid');

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            let moviesContent = '';
            data.results.forEach(movie => {
                let overview = movie.overview.length > 20 ? movie.overview.substring(0, 20) + '...' : movie.overview;
                let posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';
                moviesContent += `
                    <div class="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div class="card h-100">
                            <img src="${posterPath}" class="card-img-top" alt="${movie.title}">
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                <p class="card-text">${overview} <button class="btn btn-link p-0 text-info" onclick="alert('${movie.overview}')">Leer más</button></p>
                            </div>
                        </div>
                    </div>
                `;
            });
            moviesGrid.innerHTML = moviesContent;
        })
        .catch(error => {
            moviesGrid.textContent = 'Error al cargar las películas.';
            console.error('Error:', error);
        });
}

// Conexión a API y mostrar datos
function fetchAPIData() {
    const apiContent = document.getElementById('api-content');

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=67274a3f8164ffba75aca52f55f67551&language=es-ES&page=1') // Reemplaza con la URL de tu API
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            let htmlContent = '<ul>';
            data.results.forEach(item => {
                htmlContent += `<li>${item.title} - ${item.overview}</li>`;
            });
            htmlContent += '</ul>';
            apiContent.innerHTML = htmlContent;
        })
        .catch(error => {
            apiContent.textContent = 'Error al cargar los datos de la API.';
            console.error('Error:', error);
        });
}

window.onload = function() {
    fetchAPIData();
    fetchMovies();
};
