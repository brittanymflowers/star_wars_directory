## Overview
This app will provide a list of characters from the Star Wars universe and will allow you to search through the characters by name and explore more information about each character. Here are the main components I have built in:
* List of characters by name (CharacterList and Character Components)
* Search characters by name (Search Component)
* Prev and Next Buttons (PrevButton and NextButton Components)
* A page counter and a list of the number of total results (PageCounter Component)
* A pop up page that gives additional information about the characters (Popup Component)

### Getting Started
The app is currently hosted online at https://starwarsdirectory.netlify.app/ or you can run the app on your own device using "npm start".

On initial load, the app will show a list of all characters included in the API database with 10 results appearing per page. You can click the “Next Page” and “Prev Page” buttons at the bottom of the page to move through the list, or you can click “Return to Full List” (also at the bottom of the page) to start from the beginning. In the search bar at the top of the page, you can type in all or part of a character’s name to search the database (click "enter" or click the submit arrow to submit search request). If you click on an individual character, a page will pop up revealing more information about that character, including their film appearances, species, home planet, and more.

### General Information and Included Technologies
The App is mostly written in Javascript, CSS, and HTML within a React Framework. I used additional tools such as axios (for API calls), jest (for unit testing), ramda (for simplified functions), and an assortment of design tools (font awesome, reactstrap, etc.) The API used is Star Wars API - https://swapi.dev/

### Testing
I have written 5 tests in 3 test suites for this app. I didn't learn testing in my bootcamp, so testing/jest is brand new to me. I believe there are many more tests (and more relevant tests) I could be writing for the app, but for the sake of time, I'm submitting with the handful of examples I have. This is something I'd like to dedicate more attention to.
