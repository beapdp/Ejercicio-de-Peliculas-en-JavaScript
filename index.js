'use strict'

//Estructura y distribución de la pagina:

const tittleDiv = document.createElement('div');
tittleDiv.classList.add('projectTittle');
document.body.appendChild(tittleDiv);

const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
document.body.appendChild(mainDiv);

const firstDiv = document.createElement('div');
firstDiv.classList.add('firstContainer');
mainDiv.appendChild(firstDiv);

const comedyFinder = document.createElement('div');
comedyFinder.classList.add('comedyContainer');
firstDiv.appendChild(comedyFinder);

const findfMovieComedy = document.createElement('p');
findfMovieComedy.classList.add('comedy');
comedyFinder.appendChild(findfMovieComedy);

const finderTextComedy = document.createTextNode('¿Te apetece reír?');
findfMovieComedy.appendChild(finderTextComedy);

const scaredFinder = document.createElement('div');
scaredFinder.classList.add('scaredContainer');
firstDiv.appendChild(scaredFinder);

const findfMovieScary = document.createElement('p');
findfMovieScary.classList.add('scary');
scaredFinder.appendChild(findfMovieScary);

const finderTextScary = document.createTextNode('¿Un poquito de tensión?');
findfMovieScary.appendChild(finderTextScary);

const movieDrama = document.createElement('div');
movieDrama.classList.add('dramaContainer');
firstDiv.appendChild(movieDrama);

const movieDramaTittle = document.createElement('p');
movieDramaTittle.classList.add('dramaTittle');
movieDrama.appendChild(movieDramaTittle);

const dramaText = document.createTextNode('¿Con alguna lagrimilla?');
movieDramaTittle.appendChild(dramaText);

const movieRandomizer = document.createElement('div');
movieRandomizer.classList.add('randomizerContainer');
firstDiv.appendChild(movieRandomizer);

const movieRandom = document.createElement('p');
movieRandom.classList.add('randomizerTittle');
movieRandomizer.appendChild(movieRandom);

const randomText = document.createTextNode('¿O prefieres una al azar?');
movieRandom.appendChild(randomText);

const secondMainDiv = document.createElement('div');
secondMainDiv.classList.add('secondContainer');
mainDiv.appendChild(secondMainDiv);

const divList = document.createElement('div');
divList.classList.add('divList');
secondMainDiv.appendChild(divList);

const listMovies = document.createElement('p');
listMovies.classList.add('moviesTittles');
divList.appendChild(listMovies);

const textList = document.createTextNode('Lista de películas');
divList.appendChild(textList);

const divMovies = document.createElement('div');
divMovies.classList.add('divMovies');
secondMainDiv.appendChild(divMovies);

//Constantes:
const movieDetails = [];

//Función recoger peliculas de mi api y pintarlas en la página:
   

function getAndDrawMovies() {   
    const movieList = (movies) => {
        //console.log(movies);
        //console.log(movies[1].image);
        for (const movie of movies) {
            //console.log(movie);
            //console.log(movie.direction);
        
            const movieDay = document.createElement("div");
            const movieName = document.createElement("h3");
            const movieImage = document.createElement("img");

            movieDay.classList.add('day');
            movieName.classList.add('tittle');
            movieImage.classList.add('image');

            movieName.textContent = movie.tittle;
            movieImage.src = movie.image;

            movieDay.appendChild(movieName);
            movieDay.appendChild(movieImage);
            divMovies.appendChild(movieDay);

            movieDay.addEventListener("click", () => {
                mainDiv.innerHTML = "";
                //movieDay.classList.add('changeDivMovie');
                //console.log(movie.tittle);
                mainDiv.classList.add('mainDivDetail');

                const containerImage = document.createElement('div');
                const imageDetail = document.createElement("img");

                containerImage.classList.add('containerImageDetail');
                //tittleDetail.classList.add('tittleDetail');
                imageDetail.classList.add('imageDetail')

                //tittleDetail.textContent = movie.tittle;
                imageDetail.src = movie.image;

                mainDiv.appendChild(containerImage);
                //containerImage.appendChild(tittleDetail);
                containerImage.appendChild(imageDetail);
                //containerDetail.appendChild(movieDetail);

                const containerDetails = document.createElement('div');
                const tittleDetail = document.createElement("h3");
                const detailDirection = document.createElement('p');
                const detailYear = document.createElement('p');
                const detailDuration = document.createElement('p');
                const detailCountry = document.createElement('p');
                const detailGénero = document.createElement('p');
                
                
                containerDetails.classList.add('containerDetails');
                tittleDetail.classList.add('tittleDetail');
                detailDirection.classList.add('detailDirection');
                detailYear.classList.add('detailYear');
                detailDuration.classList.add('detailDuration');
                detailCountry.classList.add('detailCountry');
                detailGénero.classList.add('detailGénero');

                tittleDetail.textContent = movie.tittle;
                
                /*const element = () => {for (const prop in movie) {
                        element = movie[prop];
                        console.log(element);
                }}*/
                detailDirection.textContent = movie.direction;
                
                /*JSON.stringify(movie);
                Object.keys(movie),
                Object.values(movie);*/
                
                detailYear.textContent = movie.year;
                detailDuration.textContent = movie.duration;
                detailCountry.textContent = movie.country;
                detailGénero.textContent = movie.género;

                mainDiv.appendChild(containerDetails);
                containerDetails.appendChild(tittleDetail);
                containerDetails.appendChild(detailDirection);
                containerDetails.appendChild(detailYear);
                containerDetails.appendChild(detailDuration);
                containerDetails.appendChild(detailCountry);
                containerDetails.appendChild(detailGénero);
                
                movieDetails = movie;

                            })
                            console.log(movie);
        }
        
    }
    fetch ("http://localhost:3000/oneDayoneMovie").then((res) => 
        res.json()).then((movies) => movieList (movies));
};




divList.addEventListener("click", getAndDrawMovies);
tittleDiv.addEventListener("click", _ => {
    console.log('hola');
    location.reload();});
comedyFinder.addEventListener("click", () => {console.log('probando');});
