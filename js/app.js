// for 8gb memory,256 gb storage and free  delivery
function initialPrice(id) {
    const price = document.getElementById(id);
    price.innerText = 0;
    getTotalPrice()
}

// for 16gb memory
document.getElementById('btn-16gb').addEventListener('click', function () {
    var price = document.getElementById('memory-cost');
    price.innerText = 180;
    getTotalPrice()

})

// for 512 gb storage 
document.getElementById('ssd512').addEventListener('click', function () {
    var price = document.getElementById('storage-cost');
    price.innerText = 100;
    getTotalPrice()
})

// for 1TB Storage
document.getElementById('ssd1tb').addEventListener('click', function () {
    var price = document.getElementById('storage-cost');
    price.innerText = 180;
    getTotalPrice()
})

// for fast delivery
document.getElementById('fast-delivery').addEventListener('click', function () {
    const price = document.getElementById('delivery-cost');
    price.innerText = 20;
    getTotalPrice();
})

// total price 
function getTotalPrice() {
    const totalPrice = document.getElementById('price');
    const finalPrice = document.getElementById('final-price');
    const bestPrice = document.getElementById('regular-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    var storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    var storagePrice = document.getElementById('storage-cost').innerText;
    const total = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCost);
    console.log(total);
    totalPrice.innerText = total;
    finalPrice.innerText = total;


    document.getElementById('apply-btn').addEventListener('click',function () {
        
    })    

}
//price after promo code
function priceForPromocode() {
    const promoField = document.getElementById('promo-field');
    const totalPrice = document.getElementById('price');
    const finalPrice = document.getElementById('final-price');
    const error = document.getElementById('error');
    if (promoField.value == 'stevekaku') {
        const afterPromo = parseInt(totalPrice.innerText) * 20 / 100;

        finalPrice.innerText = parseInt(totalPrice.innerText) - afterPromo;
        
        error.innerText = 'Success!! You have got 20% Discount';
        error.style.color = 'seagreen';
    }
    else {
        finalPrice.innerText = totalPrice.innerText;
        error.innerText = 'Invalied Code';
        error.style.color = 'maroon';
    }
  
    promoField.value = '';

}

