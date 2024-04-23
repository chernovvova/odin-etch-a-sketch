const main = document.createElement('div');
main.classList = 'main';
main.style.cssText = 'display: flex; justify-content: center; flex-direction: column; gap: 50px; allign-items: center;';
document.body.appendChild(main);

let currentGridSize = 16;

function createGrid(gridSize) {
    const grid = document.querySelector('.grid');

    for(let i = 0; i < 16 * 16; i++) {
        const gridElem = document.createElement('div');
        gridElem.style.width = `calc(${100/16}% - 2px)`;
        gridElem.style.height = `$calc(${100/16}% - 2px)`;
        gridElem.style.border = '1px black solid';
    
        gridElem.addEventListener('mouseover', (Event) => {
            Event.target.style.backgroundColor = '#DCD5D7';
        });
        grid.appendChild(gridElem);
    }
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
createGrid(currentGridSize);

const changeSizeButton = document.createElement('button');
changeSizeButton.textContent = 'Change size';
buttons.appendChild(changeSizeButton);

