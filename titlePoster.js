const getTitlePoster = function (title) {
    const queryURL = `http://www.omdbapi.com/?s=${title}&apikey=e0c3e966`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        const titleA = Object.values(response);
        const posters = titleA[0];
        // console.log(posters[1].Poster);
        render(posters);
    });
}