var movieAPI = 'cb318d82a4b8ed6ff9428da1aaca7204';
var random_movie_button = document.querySelector("#findRandomMovie");
random_movie_button.addEventListener("click", function () {

    movieIdEl = Math.floor(Math.random() * 1000000);

    searchMovie(movieIdEl)

    function searchMovie(movieIdEl) {
        fetch('https://api.themoviedb.org/3/movie/' + movieIdEl + '?api_key=' + movieAPI)
            .then(response => response.json())
            .then(data => console.log(data))
    }
})

console.log(idNumber)