const cartItems = [];
const cartItemsElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productElement = event.target.parentElement;
    const productName = productElement.querySelector('h2').innerText;
    const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('Precio: $', ''));

    const cartItem = {
        name: productName,
        price: productPrice
    };

    cartItems.push(cartItem);
    updateCart();
}

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalElement.innerText = `Total: $${total.toFixed(2)}`;
}
