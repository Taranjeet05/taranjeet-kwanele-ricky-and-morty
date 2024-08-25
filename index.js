import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const navigation = document.querySelector('[data-js="navigation"]');


let maxPage = 1;
let page = 1;
let searchQuery = "";

// Create and append components
const searchBar = createSearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.query.value.trim();
  page = 1;
  fetchCharacter();
});
searchBarContainer.appendChild(searchBar);

const prevButton = createButton('previous', 'button--prev', () => {
  if (page > 1) {
    page--;
    fetchCharacter();
  }
});
const nextButton = createButton('next', 'button--next', () => {
  if (page < maxPage) {
    page++;
    fetchCharacter();
  }
});
const pagination = createPagination();
navigation.appendChild(prevButton);
navigation.appendChild(pagination);
navigation.appendChild(nextButton);

// Fetch characters function
async function fetchCharacter() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
    const data = await response.json();
    
    console.log(data); 
    
    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
    
    cardContainer.innerHTML = '';
    
    data.results.forEach(character => {
      const card = createCharacterCard({
        image: character.image,
        name: character.name,
        status: character.status,
        type: character.type || 'Not Defined',
        episodeCount: character.episode.length,
      });
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.log('Fetch error occurred', error);
  }
}

fetchCharacter();


