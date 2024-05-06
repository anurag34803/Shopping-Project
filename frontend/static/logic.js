function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

// Define closeSidebar function
function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hidden');
}

function setCookie(name, value, days = 1) {
    let expires = '';
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    let nameEQ = name + '=';
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function productInfo(event,productid) {
    if (event.target.id == "my-cart" || event.target.id == 'cart-icon') {
        event.stopPropagation();
        addtoCart(productid)
        return;
    }

    getProductInfo(productid)

}

// Select all div elements with the class
const divElements = document.querySelectorAll('.size-option');

     // Loop through each div element and add a click event listener
    divElements.forEach(function(divElement) {
         divElement.addEventListener('click', function() {
        // Remove the 'active' class from all div elements
        divElements.forEach(function(element) {
            element.classList.remove('active');
        });

        // Add the 'active' class to the clicked div element
        divElement.classList.add('active');

        // Get the text content of the clicked div element
        const textContent = divElement.textContent.trim();
        // Update the text content of the <span> element inside the clicked div element
        const spanElement = document.querySelector('.size');
        spanElement.textContent = textContent;
    });
});

function addtoCart(productid) {
    let size;
    let qty;
    try {
        size = document.querySelector('.size').textContent;
        qty = document.getElementById('quantitySelect').value;
    } 
    
    catch (error) {
       size = 'S';
       qty = 1;
    } 
    
    console.log(getCookie('storedData'));
    // Get the stored data from cookies or initialize an empty object
    let storedData = JSON.parse(getCookie('storedData')) || {};

    // Update the stored data with the new size and quantity
    storedData[productid] = { size: size, quantity: qty };

    // Save the updated data back to cookies
    setCookie('storedData', JSON.stringify(storedData));
}

function removefromCart(productId) {
    // Get the cart data from cookies
    let cartData = JSON.parse(getCookie('storedData'));
    delete cartData[productId];
    setCookie('storedData', JSON.stringify(cartData));

    fetch(`/cart`, {
        method: 'GET'
    }).then(response => {
        // Redirect to /cart
        window.location.href = `/cart`;
    })
}

function getProductInfo(productid) {
    // Send a GET request to the /cart path
    fetch(`/${productid}`, {
        method: 'GET'
    })
    .then(response => {
        // Redirect to /cart
        window.location.href = `/${productid}`;
    })
}