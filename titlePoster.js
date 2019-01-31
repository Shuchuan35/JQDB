const getTitlePoster = function (title) {
    const queryURL = `http://www.omdbapi.com/?s=${title}&apikey=e0c3e966`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        const titleA = Object.values(response);
        const posters = titleA[0];
        // console.log(posters[1].Poster);
        // console.log(posters[1].imdbID);
        render(posters);
    });
}

const getTMDBID = function (imdbID) {
    const apikey = '2404f28934c0e486a4e4a4accf9101c5';
    const queryURL = `http://api.themoviedb.org/3/movie/${imdbID}?api_key=${apikey}&append_to_response=videos`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (res) {
        const vKey = res.videos.results[0].key;
        const src = `https://www.youtube.com/embed/${vKey}`;
        $('#trailer').attr('src', src);
        // const src = `https://www.youtube.com/embed/RobxOGatwgE`;
    });
}