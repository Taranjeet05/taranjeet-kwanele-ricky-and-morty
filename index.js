import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// we need to write async function to fetch.
  
      async function fetchCharacter () {
        try { const response = await fetch( `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
          const data = await response.json();
          
          maxPage = data.info.pages;
          pagination.textContent = `${page} / ${maxPage}`;
  
          cardContainer.innerHTML = '';
  
          data.results.forEach(character  => {
            const card = createCharacterCard ({
            image: character.image,
            name: character.name,
            status: character.status,
            type: character.type || 'Not Defined',
            episodeCount: character.episode.length,
            });
            cardContainer.appendChild(card);
          });}
       

        /* Great Job! But we want to see not only 20 characters, we want all of them! So 
        lets implement the pagination.

      By adding the string ?page=<pageIndex> to the end of the fetch URL, you can receive 
      the respective page of characters.
      Use here the state variable page to keep track of the current page index.
      Inside of the info part of the received data you can find the max page count.
      Add an event listener on each of the next and prev buttons which do the following
      it is prevented that the page index could go higher than the max page index or below 1
      the page index is increased / decreased
      the fetchCharacters function is called
      Update the pagination display each time characters are fetched to show the 
      current page index and the current max page index.*/
       catch (error) {
      console.log('Fetch error occured', error)
       };

    }

fetchCharacter();

// Adding event listner for the buttons.

prevButton.addEventListener('click', () => {
 if(page > 1) {
  page--;
  fetchCharacter(); 
}
});

nextButton.addEventListener('click', () => {
 if (page < maxPage) {
  page++;
  fetchCharacter();
 }
});

/*The Search Bar
Now we want even more functionality in our app. We want to find individual 
characters by typing their name into the search bar.

Create a 'submit' event listener on the search bar.
Update the state variable searchQuery with the current text inside the search bar 
every time this event is triggered.
Modify the fetch URL again by adding another url encoded attribute name: append 
&name=<searchQuery> to the url. If the search query is an empty string, it will be
 ignored by the API, so don't worry about that.
Now trigger the function fetchCharacters whenever a submit event happens.
💡 You might run into some bugs at this point. Think about how the page and max page 
index might have to change when you start searching for only subsets of all characters. */

searchBar.addEventListener('submit', (event) => {
event.preventDefault();
searchQuery = event.target.query.value.trim();
page = 1;
fetchCharacter();
});

fetchCharacter();


/*Bonus: Refactoring your Code
You've done it: your app is working as expected. 🚀✨

However, we want to tidy up our code so that not everything is written 
in a single javascript file.

The next and prev button as well as the pagination and the search bar are currently 
hard coded in the index.html. Remove the HTML code and generate them via JavaScript. 
Use the respective JavaScript component files for that.
The component functions should be called createButton, createPagination, and 
createSearchBar and should return the created elements.
HINT: It is challenging to get the event listener functions right for these components.
 Use an extra input parameter onClick or onSubmit in your components.
Use the create functions inside your index.js to generate the UI components. 
You'll need to specify the event listener callback functions here either as anonymous 
arrow functions or as named functions. Use them as the argument for onClick or onSubmit,
 respectively.
Append the created components at the right places in your HTML. All container
 elements are already available in the index.js. */