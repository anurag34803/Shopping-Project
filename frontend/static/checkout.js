let cartprices = document.querySelectorAll('.curr-price')
const qty = document.querySelectorAll('.select');

let qtys = [];
let Subtotal = 0;


// Convert NodeList to an array using Array.from() or spread operator
qty.forEach((item,idx) => {
    if(idx % 2 == 0) {
        let itemqty = parseInt(item.innerText, 10);
        qtys.push(itemqty);
    }
}) 

cartprices.forEach((item,idx) => {
    let price = item.innerText.replace('₹', '').trim();
    price = parseInt(price, 10);    
    
    Subtotal += price * qtys[idx];
})

let shippingCharges = ()=> {
    if(Subtotal < 199)
        return 49;

    return 0;
}

function calculatediscount() {
    let alert = document.querySelector('.alert');
    let message = document.querySelector('.coupon-result');
    let icon = document.querySelector(".icon");

    let couponInput = document.querySelector('input[name="coupons"]');
    let couponText = couponInput.value;
    let discount = document.querySelector('.discount');

    if(Subtotal > 500 && couponText == "GET200") {
        alert.classList.remove('invalid');
        alert.classList.add('valid');
        icon.innerText = 'Check';
        message.innerText = 'Coupon Applied Sucessfully'
        discount.innerText = '₹ ' + 200;
        Order_total.innerText = '₹ ' + (Subtotal + shippingCharges() - 200);
    }

    else {
        alert.classList.remove('valid');
        alert.classList.add('invalid');
        icon.innerText = 'close';
        message.innerText = 'Invalid Coupon Code';

        discount.innerText = '₹ ' + 0;
        Order_total.innerText = '₹ ' + (Subtotal + shippingCharges() - 0);
    }
    
}

let total = document.querySelector('.total');
total.innerText = '₹ ' + Subtotal;

let charges = document.querySelector('.shipping-charges');
charges.innerText = '₹ ' + shippingCharges();

let Order_total = document.querySelector('.order-total');
Order_total.innerText = '₹ ' + (Subtotal + shippingCharges());
