// Read and Parse JSON file of movies and display on the page
fetch("movie_list.json")
        .then(response => response.json())
        .then(data => {
            var movie_list = document.getElementById('movie_list')
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
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

// Create and use a function that accepts two or more values, calculates or determines a new value based on those inputs, and returns a new value
// if (genre.includes('Action'))  {
//     return data[i].movie
// } else {
//     return "No Movie Available"
// }
