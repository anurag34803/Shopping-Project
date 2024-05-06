let cartprices = document.querySelectorAll('.curr-price')
const qty = document.querySelectorAll('.select');

let qtys = [];
let totalprice = 0;


// Convert NodeList to an array using Array.from() or spread operator
qty.forEach((item,idx) => {
    if(idx % 2 == 0) {
        console.log(item.innerText);
        let itemqty = parseInt(item.innerText, 10);
        qtys.push(itemqty);
    }
})

cartprices.forEach((item,idx) => {
    let price = item.innerText.replace('₹', '').trim();
    price = parseInt(price, 10);    
    
    totalprice += price * qtys[idx];
})

let total = document.querySelectorAll('.total');
total[0].innerText = '₹ ' + totalprice;
total[1].innerText = '₹ ' + totalprice;