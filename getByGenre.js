
//Filtrado por genero y pintarlas:

function getComedyMovies() {
    const comedyMovies = (movies) => {
        
        let comedian = movies.filter(movie => movie.genre.includes('comedia'));
        const $$secondMainDiv = document.createElement('div');
        $$secondMainDiv.classList.add('secondMainDiv')
        document.body.appendChild($$secondMainDiv);
        
        const $$thridMainDiv = document.createElement('div');
        $$thridMainDiv.classList.add('thridMainDiv')
        document.body.appendChild($$thridMainDiv);

        const $$buttonContainer = document.createElement('div');
        $$buttonContainer.classList.add('buttonContainer');
        $$thridMainDiv.appendChild($$buttonContainer);
        
        const $$button = document.createElement('button');
        $$button.classList.add('backbutton')
        $$button.textContent = 'Volver al inicio'
        $$buttonContainer.appendChild($$button);
        
        $$button.addEventListener('click',  _ => {
            location.reload()
        });
        for (const everyMovie of comedian) {
            const $$movie = document.createElement("div");
            const $$movieTitttle = document.createElement("h3");
            const $$movieImage = document.createElement("img");

            $$movie.classList.add('day');
            $$movieTitttle.classList.add('tittle');
            $$movieImage.classList.add('image');

            $$movieTitttle.textContent = everyMovie.tittle;
            $$movieImage.src = everyMovie.image;

            $$movie.appendChild($$movieTitttle);
            $$movie.appendChild($$movieImage);
            $$secondMainDiv.appendChild($$movie);
            }
        };
    fetch ("http://localhost:3000/oneDayoneMovie").then((res) => 
    res.json()).then((movies) => comedyMovies (movies));
};

function getThrillerMovies() {
    const thrillerMovies = (movies) => {
        
        let thriller = movies.filter(movie => movie.genre.includes('thriller'));
        const $$secondMainDiv = document.createElement('div');
        $$secondMainDiv.classList.add('secondMainDiv')
        document.body.appendChild($$secondMainDiv);
        
        const $$thridMainDiv = document.createElement('div');
        $$thridMainDiv.classList.add('thridMainDiv')
        document.body.appendChild($$thridMainDiv);

        const $$buttonContainer = document.createElement('div');
        $$buttonContainer.classList.add('buttonContainer');
        $$thridMainDiv.appendChild($$buttonContainer);

        const $$button = document.createElement('button');
        $$button.classList.add('backbutton')
        $$button.textContent = 'Volver al inicio'
        $$buttonContainer.appendChild($$button);

        $$button.addEventListener('click',  _ => {
            location.reload()
        });
        for (const everyMovie of thriller) {
            const $$movie = document.createElement("div");
            const $$movieTitttle = document.createElement("h3");
            const $$movieImage = document.createElement("img");

            $$movie.classList.add('day');
            $$movieTitttle.classList.add('tittle');
            $$movieImage.classList.add('image');

            $$movieTitttle.textContent = everyMovie.tittle;
            $$movieImage.src = everyMovie.image;

            $$movie.appendChild($$movieTitttle);
            $$movie.appendChild($$movieImage);
            $$secondMainDiv.appendChild($$movie);
        }
        }
    fetch ("http://localhost:3000/oneDayoneMovie").then((res) => 
    res.json()).then((movies) => thrillerMovies (movies));
}

function getDramaMovies() {
    const dramaMovies = (movies) => {
        
        let drama = movies.filter(movie => movie.genre.includes('drama'));
        const $$secondMainDiv = document.createElement('div');
        $$secondMainDiv.classList.add('secondMainDiv')
        document.body.appendChild($$secondMainDiv);
        
        const $$thridMainDiv = document.createElement('div');
        $$thridMainDiv.classList.add('thridMainDiv')
        document.body.appendChild($$thridMainDiv);

        const $$buttonContainer = document.createElement('div');
        $$buttonContainer.classList.add('buttonContainer');
        $$thridMainDiv.appendChild($$buttonContainer);

        const $$button = document.createElement('button');
        $$button.classList.add('backbutton')
        $$button.textContent = 'Volver al inicio'
        $$buttonContainer.appendChild($$button);

        $$button.addEventListener('click',  _ => {
            location.reload();});

        for (const everyMovie of drama) {
            const $$movie = document.createElement("div");
            const $$movieTitttle = document.createElement("h3");
            const $$movieImage = document.createElement("img");

            $$movie.classList.add('day');
            $$movieTitttle.classList.add('tittle');
            $$movieImage.classList.add('image');

            $$movieTitttle.textContent = everyMovie.tittle;
            $$movieImage.src = everyMovie.image;

            $$movie.appendChild($$movieTitttle);
            $$movie.appendChild($$movieImage);
            $$secondMainDiv.appendChild($$movie);
        }
        }
    fetch ("http://localhost:3000/oneDayoneMovie").then((res) => 
    res.json()).then((movies) => dramaMovies (movies));
}


export { getComedyMovies, getThrillerMovies, getDramaMovies };