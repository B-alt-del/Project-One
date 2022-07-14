var movieAPI = 'cb318d82a4b8ed6ff9428da1aaca7204';
var random_movie_button = document.querySelector("#findRandomMovie");

var movieIdEl = randomIdGen();


function randomIdGen() {
    return Math.floor(Math.random() * 1000000);
}

function searchMovie(movieIdEl) {
    // console.log(movieIdEl)
    fetch('https://api.themoviedb.org/3/movie/' + movieIdEl + '?api_key=' + movieAPI)
        .then(response => response.json())
        .then(data =>{ 
            if(data.success === false) {
                var newRandID = randomIdGen()
                searchMovie(newRandID)    
            }

            console.log(data);
            console.log(data.original_title)
            document.getElementById("movieStuff").innerHTML = data.original_title;
            
        })
}

// random_movie_button.addEventListener("click", function () {


//     searchMovie(movieIdEl)

// })
searchMovie(movieIdEl)

