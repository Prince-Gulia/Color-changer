const body = document.querySelector('body');
const choice = document.querySelectorAll('.colors');
const div = document.querySelector('.big-container');
const secondDiv = document.querySelector('.main-container');
const allH2 = document.querySelectorAll('h2');
const h3 = document.querySelector('#current-color')

choice.forEach((color) => {
  color.addEventListener('click', (e) => {
    const selectedColor = e.target.id || 'white'; 
    body.style.backgroundColor = selectedColor;
    div.style.backgroundColor = selectedColor;
    secondDiv.style.backgroundColor = selectedColor;
    allH2.forEach((h) => {
      h.style.backgroundColor = selectedColor;
    });
    h3.textContent = `Current Color : ${selectedColor}`
  });
});
