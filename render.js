const render = function (posters) {
    $('#display-poster').empty();

    for (let i = 0; i < posters.length; i++) {

        const imgDiv = $('<img>');
        imgDiv.addClass('poster');
        if (posters[i].Poster !== 'N/A' && posters[i].Type === 'movie') {
            imgDiv.attr('src', posters[i].Poster);
            imgDiv.attr('imdb-id', posters[i].imdbID);
        }
        else {
            imgDiv.hide();
        }
        $('#display-poster').append(imgDiv);
    }

    $('#movie-title').val('');
    addListeners();
    showPoster();
}

