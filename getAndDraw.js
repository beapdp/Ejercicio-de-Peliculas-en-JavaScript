

function getAndDrawMovies() {   
    const movieList = (movies) => {
        const secondMainDiv = document.createElement('div');
        secondMainDiv.classList.add('secondMainDiv')
        document.body.appendChild(secondMainDiv);

        const thridMainDiv = document.createElement('div');
        thridMainDiv.classList.add('thridMainDiv')
        document.body.appendChild(thridMainDiv);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer');
        thridMainDiv.appendChild(buttonContainer);
        const button = document.createElement('button');
        button.classList.add('backbutton')
        button.textContent = 'Volver al inicio'
        buttonContainer.appendChild(button);
        
        button.addEventListener('click',  _ => {
            location.reload();});
        
        for (const movie of movies) {
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
            secondMainDiv.appendChild(movieDay);

            movieDay.addEventListener("click", () => {
                secondMainDiv.innerHTML = "";
                secondMainDiv.classList.add('mainDivDetail');

                const containerImage = document.createElement('div');
                const imageDetail = document.createElement("img");

                containerImage.classList.add('containerImageDetail');
                imageDetail.classList.add('imageDetail')
                imageDetail.src = movie.image;

                secondMainDiv.appendChild(containerImage);
                containerImage.appendChild(imageDetail);

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
                detailDirection.textContent = `Director:  ${movie.direction}`;
                detailYear.textContent = `Año:  ${movie.year}`;
                detailDuration.textContent = `Duración:  ${movie.duration}`;
                detailCountry.textContent = `País:  ${movie.country}`;
                detailGénero.textContent = `Género:  ${movie.genre}`;

                secondMainDiv.appendChild(containerDetails);
                containerDetails.appendChild(tittleDetail);
                containerDetails.appendChild(detailDirection);
                containerDetails.appendChild(detailYear);
                containerDetails.appendChild(detailDuration);
                containerDetails.appendChild(detailCountry);
                containerDetails.appendChild(detailGénero);
                })
        }
    }
    fetch ("http://localhost:3000/oneDayoneMovie").then((res) => 
        res.json()).then((movies) => movieList (movies));
};

export { getAndDrawMovies };