
const gridContainer = document.querySelector('.grid');

const SIZE = 16;    

generateGrid(SIZE);

function generateGrid(size){
    gridContainer.textContent = '';

    const cellContainerFragment = new DocumentFragment();
    const cellSize = calculateCellSize(size);
    for(let i=0; i<size*size; ++i){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = cell.style.height = `${cellSize}px`;
        cellContainerFragment.append(cell);
    }

    gridContainer.append(cellContainerFragment);
}

function calculateCellSize(size){
    const gridSize = gridContainer.clientWidth;
    let cellSize = gridSize / size;
    return cellSize;
}