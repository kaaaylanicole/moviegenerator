# Reelz Movie Generator

My project is called Reelz Movie Generator. I'm a huge movie fan and always have a hard time picking my next movie to watch. Users can come to the site to choose the amount of movies they are looking for, the genre they want to watch, and the year they would like the movie to be from. Once filters are chosen, the movies that match those filters will be displayed. I also have a "Sign Up" form for users to create an account. This could be cool in the future to have the accounts, a login portal and have users be able to save the movies they want to watch in their account.

## Responsive Design
- Desktop and Mobile
- I have a media query for mobile: ```@media only screen and (max-width: 541px)```

## Special Instructions
- I wanted to try to implement ExpressJS in order to have a server that didn't make someone download an extension, but struggled a bit. I want to do this on my own later.
- Instead, please open on VSCode and install Live Server [(https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)] in order to run this project.
- When viewing the project, right click on the index.html file in VSCode and click "Open With Live Server" to view properly.

## Requirements / Features List
**1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app**
- I  created a JSON file of movies (title, genre, year, and the movie's cover image) and displayed all of the movies on the page.

**2. Create a form and save the values (on click of Submit button) to an external file**
- I created a Sign Up form and am saving the values to a TXT file.

**3. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application**
- Within the movies I am displaying, I created an array from the JSON file, and retrieves the values that match filters to then display that onto the page.

Thank you! :)
