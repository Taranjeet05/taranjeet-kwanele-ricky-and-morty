export function createSearchBar(onSubmit) {
  const form = document.createElement('form');
  form.classList.add('search-bar');
  form.addEventListener('submit', onSubmit);

  const input = document.createElement('input');
  input.name = 'query';
  input.classList.add('search-bar__input');
  input.type = 'text';
  input.placeholder = 'search characters';
  input.ariaLabel = 'character name';

  const button = document.createElement('button');
  button.classList.add('search-bar__button');
  button.ariaLabel = 'search for character';

  const img = document.createElement('img');
  img.classList.add('search-bar__icon');
  img.src = 'assets/magnifying-glass.png';
  img.alt = '';

  button.appendChild(img);
  form.appendChild(input);
  form.appendChild(button);

  return form;
}
