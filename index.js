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
const maxPage = 1;
const page = 1;
const searchQuery = "";

// we need to write async function to fetch.

async function fetchCharacter () {
  const response = await fetch(`https://rickandmortyapi.com/api`);
  const data = await response.json();
  
  maxPage = data.info.pages;
  cardcontainer.innerHTML = '';

  data.result.foreach(Character  => {
    const card = createCharacterCard ({
    image: character.image,
    name: character.name,
    status: character.status,
    type: character.type,
    episodcount: character.episodcount.occurrences
    });
    cardcontainer.appendChild(card);
  });

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

pagination.textContent = `${page} / ${maxPage}`;

}

fetchCharacter();