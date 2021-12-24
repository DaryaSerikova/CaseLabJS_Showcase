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
    console.log(`Товаров на витрине: ${products.length}`);
    console.log(`Хотим добавить в корзину товар номер ${productId}`);
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
                // order = [...order, product];
                order.push(product);
            }
        })

        console.log(`Товаров в корзине: ${order.length}`);
    }


    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    console.log('Удаляем товар');
    //удаление товара из корзины
    order.forEach( (elem, index) => {
        console.log(elem);
        
        console.log(`index у order ${index}`);
        console.log(`Ищем такой id = ${productId}`);
        console.log(`Текущий в цикле id = ${elem.id}`);
        console.log(`${elem.id === productId}`);
        if(elem.id === productId) {
            // order = order.pop(elem);
            
            order.splice(index, 1);
        }
    })

    console.log(`Товаров в корзине: ${order.length}`);

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