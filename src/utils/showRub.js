export default function showRub(evt) {
  if (document.querySelector('.dummy-rub')) document.querySelector('.dummy-rub').remove();

  const input = evt.target;
  const fontSize = parseFloat(getComputedStyle(input).fontSize);

  const newSpan = document.createElement('span');
  newSpan.style.fontSize = `${fontSize}px`;
  newSpan.innerHTML = input.value;
  document.body.appendChild(newSpan);
  const width = newSpan.offsetWidth + fontSize;
  newSpan.remove();

  const showR = document.createElement('span');
  showR.style.position = 'absolute';
  showR.style.left = `${width}px`;
  showR.style.bottom = '9px';
  showR.pointerEvents = 'none';
  showR.classList.add('dummy-rub');
  showR.textContent = ' ₽';

  input.after(showR);
}
