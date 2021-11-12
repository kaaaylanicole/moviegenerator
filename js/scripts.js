fetch("movie_list.json")
        .then(response => response.json())
        .then(data => {
            var movie_list = document.getElementById('movie_list')
            for (var i = 0; i < data.length; i++) {
                console.log(data[i])
                movie_list.innerHTML = movie_list.innerHTML + '<p>' + data[i].title + '</p>'
            }
        })

function showForm() {
    let formDiv = document.getElementById('signup-form')
    console.log(formDiv)
    formDiv.classList.remove('hide')
    }

function hideForm() {
    let formDiv = document.getElementById('signup-form')
    formDiv.classList.add('hide')
    }