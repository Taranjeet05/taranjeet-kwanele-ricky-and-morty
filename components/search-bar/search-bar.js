export function createSearchBar({ onSubmit }) {
  const form = document.createElement('form');
  form.classList.add('search-bar');
  form.setAttribute('data-js', 'search-bar-container');
  
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'query');
  input.setAttribute('placeholder', 'Search characters...');
  input.classList.add('search-bar__input');
  
  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.classList.add('search-bar__button');
  button.textContent = 'Search';
  
  form.appendChild(input);
  form.appendChild(button);
  
  if (onSubmit) {
    form.addEventListener('submit', onSubmit);
  }
  
  return form;
}
