'use strict'

import { getAndDrawMovies } from "./getAndDraw.js";
import { getComedyMovies, getThrillerMovies, getDramaMovies } from "./getByGenre.js";

//Estructura y distribución principal de la pagina:

const $$tittleDiv = document.createElement('div');
$$tittleDiv.classList.add('projectTittle');
document.body.appendChild($$tittleDiv);

const $$mainDiv = document.createElement('div');
$$mainDiv.classList.add('mainDiv');
document.body.appendChild($$mainDiv);

const $$firstDiv = document.createElement('div');
$$firstDiv.classList.add('firstContainer');
$$mainDiv.appendChild($$firstDiv);

const $$comedyFinder = document.createElement('div');
$$comedyFinder.classList.add('comedyContainer');
$$firstDiv.appendChild($$comedyFinder);

const $$findfMovieComedy = document.createElement('p');
$$findfMovieComedy.classList.add('comedy');
$$comedyFinder.appendChild($$findfMovieComedy);

const $$finderTextComedy = document.createTextNode('¿Con alguna risa?');
$$findfMovieComedy.appendChild($$finderTextComedy);

const $$scaredFinder = document.createElement('div');
$$scaredFinder.classList.add('thrillerContainer');
$$firstDiv.appendChild($$scaredFinder);

const $$findfMovieScary = document.createElement('p');
$$findfMovieScary.classList.add('scary');
$$scaredFinder.appendChild($$findfMovieScary);

const finderTextScary = document.createTextNode('¿Algo de tensión?');
$$findfMovieScary.appendChild(finderTextScary);

const $$movieDrama = document.createElement('div');
$$movieDrama.classList.add('dramaContainer');
$$firstDiv.appendChild($$movieDrama);

const $$movieDramaTittle = document.createElement('p');
$$movieDramaTittle.classList.add('dramaTittle');
$$movieDrama.appendChild($$movieDramaTittle);

const $$dramaText = document.createTextNode('¿Con alguna lagrimilla?');
$$movieDramaTittle.appendChild($$dramaText);

const $$secondMainDiv = document.createElement('div');
$$secondMainDiv.classList.add('secondContainer');
$$mainDiv.appendChild($$secondMainDiv);

const $$divList = document.createElement('div');
$$divList.classList.add('divList');
$$secondMainDiv.appendChild($$divList);

const $$listMovies = document.createElement('p');
$$listMovies.classList.add('moviesTittles');
$$divList.appendChild($$listMovies);

const $$textList = document.createTextNode('Lista completa de películas');
$$divList.appendChild($$textList);

//Event Listeners:

$$divList.addEventListener("click", () => {
    $$mainDiv.innerHTML = '';
    getAndDrawMovies()
});
$$tittleDiv.addEventListener("click", _ => {
    console.log('hola');
    location.reload()
});
$$comedyFinder.addEventListener("click", ()=>{
    $$mainDiv.innerHTML = '';
    getComedyMovies()
});
$$scaredFinder.addEventListener("click", ()=>{
    $$mainDiv.innerHTML = '';
    getThrillerMovies()
});
$$movieDrama.addEventListener("click", () => {
    $$mainDiv.innerHTML = '';
    getDramaMovies()
});