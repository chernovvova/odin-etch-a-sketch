const main = document.createElement('div');
main.classList = 'main';
main.style.cssText = 'display: flex; justify-content: center; flex-direction: column; gap: 50px; allign-items: center;';
document.body.appendChild(main);

const defaultGridSize = 16;

function createGrid(gridSize) {
    const grid = document.querySelector('.grid');

    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridElem = document.createElement('div');
        gridElem.style.width = `calc(${100 / gridSize}% - 2px)`;
        gridElem.style.height = `$calc(${100 / gridSize}% - 2px)`;
        gridElem.style.border = '1px black solid';
    
        gridElem.addEventListener('mouseover', (Event) => {
            Event.target.style.backgroundColor = `rgb(${Math.random() * 225}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });
        grid.appendChild(gridElem);
    }
}

function changeSize() {
    const newSize = prompt('Enter new grid size (number between 0 - 100): ');
    if(newSize <= 0 || newSize > 100) {
        alert('Wrong input, enter number between 0 - 100.');
        return;
    }
    const grid = document.querySelector('.grid');
    grid.replaceChildren();
    createGrid(newSize);
}

const grid = document.createElement('div');
grid.classList = 'grid';
grid.style.cssText = `display: flex;
                     flex-direction: row;
                     flex-wrap: wrap;
                     height: 650px;
                     width: 650px`;
const gridContainer = document.createElement('div');
gridContainer.style.cssText = 'display: flex; justify-content: center;';
gridContainer.appendChild(grid);

const buttons = document.createElement('div');
buttons.style.cssText = 'display: flex; justify-content: center;';
main.appendChild(buttons);
main.appendChild(gridContainer);
createGrid(defaultGridSize);

const changeSizeButton = document.createElement('button');
changeSizeButton.textContent = 'Change size';
changeSizeButton.addEventListener('click', changeSize);

buttons.appendChild(changeSizeButton);

