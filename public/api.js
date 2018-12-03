const CreateProduct = document.querySelector('.CreateProduct');

CreateProduct.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = CreateProduct.querySelector('.name').value;
  const section = CreateProduct.querySelector('.section').value;
  post('/createProduct', { name, section })
});
function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
};
