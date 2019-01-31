const render = function (posters) {
    $('#display-poster').empty();
    let images = '';
    for (let i = 0; i < posters.length; i++) {
        if (posters[i].Poster !== 'N/A') {
            images += `<img src='${posters[i].Poster}'>`;
        }
    }
    $('#display-poster').append(images);
    $('#movie-title').val('');
}