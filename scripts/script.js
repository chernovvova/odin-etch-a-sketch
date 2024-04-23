const grid = document.querySelector('.grid');

for(let i = 0; i < 16 * 16; i++) {
    const gridElem = document.createElement('div');
    gridElem.textContent = 'Cell';
    gridElem.style.width = `calc(${100/16}% - 2px)`;
    gridElem.style.height = `$calc(${100/16}% - 2px)`;
    gridElem.style.border = '1px black solid';
    grid.appendChild(gridElem);
}