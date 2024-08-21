export function createPagination() {
  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  pagination.setAttribute('data-js', 'pagination');
  return pagination;
}
