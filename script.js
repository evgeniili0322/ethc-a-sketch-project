const body = document.querySelector('body');
let container = document.querySelector('#container');
let squarePerSide = 16;

function createGrid() {
  for (let i = 0; i < squarePerSide; i++) {
    for (let k = 0; k < squarePerSide; k++) {
      const square = document.createElement('div');
      let squareSide = 960 / squarePerSide;

      square.style.height = `${squareSide}px`;
      square.style.width = `${squareSide}px`;

      square.addEventListener('mouseover', function() {
        this.classList.add('fill-square');
      });
  
      container.appendChild(square);
    }
  }
}

window.addEventListener('load', createGrid);

function setGridSides() {
  squarePerSide = Number(prompt('Enter square per side'));
  container.remove();

  container = document.createElement('div');
  container.setAttribute('id', 'container');
  createGrid();
  body.appendChild(container);
}

const gridBtn = document.querySelector('#gridbtn');

gridBtn.addEventListener('click', setGridSides);