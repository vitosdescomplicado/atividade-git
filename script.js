const comer = document.querySelector('#comer-btn');
const pudimImg = document.querySelector('#pudim-img');

if (comer && pudimImg && pudimImg instanceof HTMLImageElement) {
  const handleClick = () => (pudimImg.src = 'public/prato.png');
  comer.addEventListener('click', handleClick);
}
