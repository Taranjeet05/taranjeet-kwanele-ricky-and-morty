export function createCharacterCard(character) {
// we are going to create article elements for card.

const cardElement = document.createElement('article');
cardElement.classList.add('card');

// setting innerHTML for the card.

cardElement.innerHTML = `
<figure class = 'card_image-container'>
< img class ='card_image'
 src = '${character.image}'
 alt = '${character.name}' 
  <figcaption class = 'card__image-gradient'></figcaption>
 figure/>
 
= <section class 'card__content'>
<header class = 'card__title'>
<h2 class ='card__title'></h2>
</header>

 <dl class="card__info">
    <dt class="card__info-title"></dt>
    <dd class="card__info-description"></dd>
    <dt class="card__info-title"></dt>
    <dd class="card__info-description"></dd>
    <dt class="card__info-title"></dt>
    <dd class="card__info-description"></dd>
  </dl>
</section>
`
}

createCharacterCard();