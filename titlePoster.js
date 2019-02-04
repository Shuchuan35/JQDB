const getTitlePoster = function (title) {
    const queryURL = `http://www.omdbapi.com/?s=${title}&apikey=eb08547`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        const titleA = Object.values(response);
        posters = titleA[0];    

        //iterating through posters[] adding object values from tmdb api
        for (let i = 0; i < posters.length; i++){
            const wholeTitle = posters[i].Title;
            const queryURL2 = `http://www.omdbapi.com/?t=${wholeTitle}&plot=long&apikey=eb08547`;
            const apikey = '2404f28934c0e486a4e4a4accf9101c5';
            const queryURL3 = `http://api.themoviedb.org/3/movie/${posters[i].imdbID}?api_key=${apikey}&append_to_response=videos`;
            $.ajax ({  //get the backdrop path for img on back of 3d object 
                url: queryURL3,
                method: 'GET'
            }).then(function(responseB){
                let objectAddB = {  //creates objectAddB to store backdropPath key/value
                    backdropPath: responseB.backdrop_path,
                };

                $.extend(posters[i], objectAddB);  //extend objectAddB to the corresponding object in posters[]
                render(posters);
                return posters;
            });
            $.ajax ({
                url: queryURL2,
                method: 'GET'
            }).then(function(responseT){  //back to omdb to retrieve more key/value pairs to add to posters[]
                const genres = responseT.Genre; //separate the string Genre into distinct variables
                const genreSplit = genres.split(",");
                const genre1 = genreSplit[0];
                const genre2 = genreSplit[1];
                let objectAdd = {       //create objectAdd additional key/value fields destined for posters[]
                    rated: responseT.Rated,
                    runtime: responseT.Runtime,
                    genreOne: genre1,
                    genreTwo: genre2,
                    overview: responseT.Plot,
                    // tomatoRating: responseT.Ratings[1].Value,  //ICEBOX
                    website: responseT.Website
                };
                $.extend(posters[i], objectAdd);  //extend objectAdd to the corresponding object in posters[]
                render(posters);
                return posters;
            });
        }
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
        // const backdrop = res.backdrop_path;
        // return backdrop;

        $('#trailer').attr('src', src);

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