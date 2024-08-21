export function createCharacterCard(character) {
// we are going to create article elements for card.

const cardElement = document.createElement('article');
cardElement.classList.add('card');

// setting innerHTML for the card.

cardElement.innerHTML = `
    <figure class="card__image-container">
      <img
        class="card__image"
        src="${character.image}"
        alt="${character.name}"
      />
      <figcaption class="card__image-gradient"></figcaption>
    </figure>
    <section class="card__content">
      <header class="card__header">
        <h2 class="card__title">${character.name}</h2>
      </header>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${character.status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${character.type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${character.episodeCount}</dd>
      </dl>
    </section>
  `;
  return cardElement;
}
