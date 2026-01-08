const container = document.querySelector('.container');

function createGrid() {
  const squaresPerSide = 16;
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

createGrid();
