document.addEventListener('DOMContentLoaded', () => {
    const garden = document.getElementById('garden');
    const itemButtons = document.querySelectorAll('.item-button');
    let selectedItem = null;

    itemButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedItem = button.getAttribute('data-item');
        });
    });

    // Create garden grid
    for (let i = 0; i < 144; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        garden.appendChild(cell);

        cell.addEventListener('click', () => {
            if (selectedItem) {
                cell.innerHTML = '';
                const item = document.createElement('div');
                item.classList.add(selectedItem);
                cell.appendChild(item);
            }
        });
    }
});
