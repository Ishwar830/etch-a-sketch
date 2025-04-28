
const gridContainer = document.querySelector('.grid');

const SIZE = 16;    

generateGrid(SIZE);

gridContainer.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('cell')){
        colorCell(e.target);
    }
})

function colorCell(cellElement){
    cellElement.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`; 
    console.log(cellElement.style.backgroundColor);
}


function getRandomRGB(){
    const MAX_VAL = 256;
    return Math.floor(Math.random() * MAX_VAL);
}


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