const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {

    let isExist = false;

    order.forEach(elem => {
        if(!isExist) {
            productId === elem.id ? isExist = true : isExist = false;
        }
    })

    if (isExist) {
        console.log('Товар уже в корзине');
        alert('Товар уже в корзине');
    } else {
        console.log(`Добавляем товар номер ${productId}`);

        products.forEach( product => {        
            if(product.id === productId) {
                order = [...order, product];
            }
        })

        console.log(`Товаров в корзине: ${order.length}`);
    }

    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    console.log(`Удаляем товар номер: ${productId}`);

    order.forEach( (elem, index) => {
        if(elem.id === productId) order.splice(index, 1);
    })

    console.log(`Товаров в корзине: ${order.length}`);

    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {

    let totalPrice = order.reduce((ttlPrice, elem, order) => {
        return ttlPrice + elem.price;
    }, 0);
    
    console.log(`Total Price: ${totalPrice}`);
    document.getElementById('total').innerText = totalPrice;
    return totalPrice;
}


function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}