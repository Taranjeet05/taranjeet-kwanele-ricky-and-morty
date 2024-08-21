export function createButton(text, className, onClick) {
  const button = document.createElement('button');
  button.classList.add('button', className);
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}
