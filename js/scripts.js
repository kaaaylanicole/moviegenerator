var movieList = []

// Read and Parse JSON file of movies and display on the page
fetch("movie_list.json")
    .then(response => response.json())
    .then(data => {
        var movie_list = document.getElementById('movie_list')
        for (var i = 0; i < data.length; i++) {
            console.log(data[i])
            movieList.push(data[i])
            movie_list.innerHTML = movie_list.innerHTML + '<div class="movie-wrapper"> <p>' + data[i].title + '</p> <img src ="../images/' + data[i].img + '"></div>'
        }
    })

// Popup box for the Create An Account Signup form
function showForm() {
    let formDiv = document.getElementById('signup-form')
    console.log(formDiv)
    formDiv.classList.remove('hide')
}

function hideForm() {
    let formDiv = document.getElementById('signup-form')
    formDiv.classList.add('hide')
}

// Create a Form and Save the Values to TXT file
function saveDynamicDataToFile() {

    var userInput = document.getElementById("email").value;

    var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
}

// Create an array, populate it with values, retreive values and display it

function filterMovies() {
    var amount = document.querySelector('#movie_amount').value

    var moviesDisplay = movieList.filter(genreYearFilter)
    console.log(moviesDisplay)

    var movie_list = document.getElementById('movie_list')
    movie_list.innerHTML = ''
    for (var i = 0; i < moviesDisplay.length; i++) {
        movie_list.innerHTML = movie_list.innerHTML + '<div class="movie-wrapper"> <p>' + moviesDisplay[i].title + '</p> <img src ="../images/' + moviesDisplay[i].img + '"></div>'
        if (i == amount - 1) {
            return
        }
    }
}

function genreYearFilter(movie) {
    var genre = document.querySelector('#movie_genre').value
    var year = document.querySelector('#movie_year').value

    year = year.split('-')

    var yearStart = parseInt(year[0])
    var yearEnd = parseInt(year[1])

    return movie.genre == genre && parseInt(movie.year) >= yearStart && parseInt(movie.year) <= yearEnd
}