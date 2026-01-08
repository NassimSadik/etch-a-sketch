const container = document.querySelector('.container');

function createGrid(squaresPerSide) {
  const gridSize = squaresPerSide * squaresPerSide;
  const CONTAINERSIZE = 960;

  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${CONTAINERSIZE / squaresPerSide}px`;
    square.style.height = `${CONTAINERSIZE / squaresPerSide}px`;

    container.appendChild(square);

    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'gray';
    });
  }
}

createGrid(16);

const gridButton = document.querySelector('.grid-button');

function handleGridButton() {
  const input = prompt(
    'Enter the desired number of squares per side between 8 and 100',
    '16'
  );

  const squaresPerSide = parseInt(input);

  if (squaresPerSide < 8 || squaresPerSide > 100 || isNaN(squaresPerSide)) {
    alert('Please enter a valid number between 8 and 100');
    return;
  }

  // Remove existing grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid(squaresPerSide);
}

gridButton.addEventListener('click', () => {
  handleGridButton();
});
