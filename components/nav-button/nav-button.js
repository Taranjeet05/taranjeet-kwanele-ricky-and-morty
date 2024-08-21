export function createButton({ type, onClick }) {
  const button = document.createElement('button');
  button.classList.add('button', `button--${type}`);
  button.setAttribute('data-js', `button-${type}`);
  button.textContent = type === 'prev' ? 'Previous' : 'Next';
  
  if (onClick) {
    button.addEventListener('click', onClick);
  }
  
  return button;
}
