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
    console.log(products.length);
    console.log(productId);
    let isExist = false;
    //console.log(!isExist);
    order.forEach(elem => {
        //console.log('хeq');
        if(!isExist) {
            productId === elem.id ? isExist = true : isExist = false;
            //console.log(`isExist ${isExist} (if)`);
        }
        //console.log(`isExist ${isExist} (forEach)`);
    })

    console.log(`isExist ${isExist} (func)`);

    if (isExist) {
        console.log('Товар уже в корзине');
        // alert('Товар уже в корзине');
    } else {
        console.log('Добавляем товар');
        products.forEach( product => {

            if(product.id === productId) {
                order = [...order, product];
            }
        })

        console.log(order.length);
    }


    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    //удаление товара из корзины


    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    //подсчет общей стоимости заказа



    document.getElementById('total').innerText = totalPrice;
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