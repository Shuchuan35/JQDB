const render = function (posters) {

    $('#container-movies').empty();
    // iterating through posters[] placing elements on page
    for (let i = 0; i < posters.length; i++) {
        const imgDiv = $('<div>');
        imgDiv.addClass('container-movie');
        //front of the 3d movie element
        const movie = $('<div>');
        movie.addClass('movie');
        const movieInsideFront = $('<div>');
            movieInsideFront.addClass('movie-inside front');
                const image = $('<img>');
                movieInsideFront.append(image);
        movie.append(movieInsideFront);

        //back of the 3d movie element
        const movieInsideBack = $('<div>');
            movieInsideBack.addClass('movie-inside back');
        const movieDetails = $('<div>');
            movieDetails.addClass('movie-details');
        const movieSnap = $('<div>');
            movieSnap.addClass('movie-snap');
        const backImage = $('<img>');
        const backImageSrc = `https://image.tmdb.org/t/p/w500/${posters[i].backdropPath}`;
            backImage.attr('src', backImageSrc);
        movieSnap.append(backImage);
        const backHeading = $(`<h1>${posters[i].Title}<br><span>${posters[i].Year}  -  ${posters[i].runtime}  -  rated: ${posters[i].rated}</span></h1>`);
        movieSnap.append(backHeading);
        //ul movieTags
        const movieTags = $('<ul>');
        movieTags.addClass('movie-tags');
            const listItems = $(`<li><a ref="#">${posters[i].genreOne}</a></li><li><a href="#">${posters[i].genreTwo}</a></li>`);
            movieTags.append(listItems);
        movieSnap.append(movieTags);
        const movieSynopsis = $(`<p>${posters[i].overview}</p>`);
        movieSynopsis.addClass('movie-synopsis');
        movieSnap.append(movieSynopsis);
        movieDetails.append(movieSnap);
        movieInsideBack.append(movieDetails);
        movie.append(movieInsideBack);

        imgDiv.append(movie);
        $('#container-movies').append(imgDiv);


        if (posters[i].Poster !== 'N/A' && posters[i].Type === 'movie') { //filters for movies that have a poster url only
            image.attr('src', posters[i].Poster);
            imgDiv.attr('imdb-id', posters[i].imdbID);

            // images += `<img src='${posters[i].Poster}'>`;
        }
        else {
            imgDiv.hide();
        }
    }
    // $('#display-poster').append(images);
    $('#movie-title').val('');
    addListeners();

}
