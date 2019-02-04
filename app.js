const addListeners = function () {
    setTimeout(function() {
        // console.log("SetTimeout Running")
    
        const getIMDB = function () {
            imdbValue = $(this).attr('imdb-id');
            console.log(imdbValue);
            getTMDBID(imdbValue);
        }
        $('.poster').on('click', getIMDB); //gets imdb-id from response (ombd)
    }, 0)
}

const searchTitles = function (e) {
    e.preventDefault();
    const title = $('#movie-title').val().trim();
    // console.log(title);
    getTitlePoster(title);
}

$('#search-title').on('click', searchTitles);