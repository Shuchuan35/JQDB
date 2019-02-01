
const getTitlePoster = function (title) {
    const queryURL = `https://www.omdbapi.com/?s=${title}&apikey=e0c3e966`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        const titleA = Object.values(response);
        const posters = titleA[0];
        render(posters);
    });
}

const getTMDBID = function (imdbID, source) {
    const apikey = '2404f28934c0e486a4e4a4accf9101c5';
    const queryURL = `https://api.themoviedb.org/3/movie/${imdbID}?api_key=${apikey}&append_to_response=videos`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (res) {
        $('#inside-trailer').empty();
        $('#brief').empty();
        const vKey = res.videos.results[0].key;
        const title = res.title;
        const brief = res.overview;
        
        const imgDiv = $('<img>');
        imgDiv.attr('id', 'movie-poster');
        // console.log(source);
        imgDiv.attr('src', source);

        const titleHolder = `<h5>${title}</h5>`;
        const briefHolder = `<p>${brief}</p>`;
        $('#inside-trailer').append(imgDiv);
        $('#brief').append(titleHolder).append(briefHolder);

        const src = `https://www.youtube.com/embed/${vKey}`;
        // $('#trailer-title').text(res.videos.results[0].name);
        $('iframe').attr('src', src);
        showTrailer();
    });
}

const getPopular = function (popularSearch) {
    const popURL = `https://api.themoviedb.org/3/movie/popular?api_key=2404f28934c0e486a4e4a4accf9101c5&language=en-US&page=1`;
    $.ajax({
        url: popURL,
        method: 'GET'
    })

    render(posters);
}

