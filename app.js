const searchTitles = function (e) {
    e.preventDefault();
    const title = $('#movie-title').val().trim();
    console.log(title);
    getTitlePoster(title);
}

$('#search-title').on('click', searchTitles);