//CONSTANTES:
 const movieList = [];
 const movieDetails = [];
 const comedyMovies = [];
 const scaredMovies = [];

 //FUNCIÓN PINTAR MOVIES:

    



 //FUNCIÓN PETICION MOVIES:
 const askMovies = fetch ("http://localhost:3000/oneDayoneMovie").then((res) => 
 res.json()).then((movies) => movieList.push(movies));

console.log(movieDetails);