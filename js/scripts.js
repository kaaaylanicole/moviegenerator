fetch("movie_list.json")
        .then(response => response.json())
        .then(data => {
            var movie_list = document.getElementById('movie_list')
            for (var i = 0; i < data.length; i++) {
                // var div = document.createElement("div");
                // div.innerHTML = 'Movie: ' + data[i].movie.title;
                console.log(data[i])
                movie_list.innerHTML = movie_list.innerHTML + '<p>' + data[i].title + '</p>'
            }
        })
