const InventoryModule = (() => {
    const products = [
        { name: 'Computador', quantity: 10 },
        { name: 'Mouse', quantity: 20 }
    ];

    const productNameInput = document.getElementById('productName');
    const productQtyInput = document.getElementById('productQty');
    const productTableBody = document.getElementById('productTableBody');
    const addProductBtn = document.getElementById('addProductBtn');
    const message = document.getElementById('message');

    function renderProducts() {
        productTableBody.innerHTML = '';

        products.forEach((product) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const quantityCell = document.createElement('td');

            nameCell.textContent = product.name;
            quantityCell.textContent = product.quantity;

            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            productTableBody.appendChild(row);
        });
    }

    function addProduct() {
        const name = productNameInput.value.trim();
        const quantity = Number(productQtyInput.value);

        if (!name) {
            message.textContent = 'Debes ingresar el nombre del producto.';
            return;
        }

        if (!Number.isInteger(quantity) || quantity <= 0) {
            message.textContent = 'La cantidad debe ser un número entero mayor que 0.';
            return;
        }

        products.push({ name, quantity });
        productNameInput.value = '';
        productQtyInput.value = 1;
        message.textContent = `Producto "${name}" registrado correctamente.`;
        renderProducts();
    }

    function init() {
        renderProducts();
        addProductBtn.addEventListener('click', addProduct);
    }

    return { init };
})();

document.addEventListener('DOMContentLoaded', InventoryModule.init);
