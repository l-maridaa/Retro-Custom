document.querySelectorAll('.dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown > a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelector('#mb-menu-toggle').addEventListener('click', () => document.querySelector('#header-wrapper').classList.add('active'))

document.querySelector('#mb-menu-close').addEventListener('click', () => document.querySelector('#header-wrapper').classList.remove('active'))


// click event to display mian page
var mains = document.getElementsByClassName('home');
for (let i = 0; i < mains.length; i++) {
    var main = mains[i];
    main.addEventListener('click', displayMain);
}

// click event to display shop page
// var shop = document.getElementsByClassName('shop-sec')[0];
// shop.addEventListener('click', displayShop);

// click event to display cart page
var cart = document.getElementsByClassName('bx-cart')[0];
cart.addEventListener('click', displayCart);

// click event to display wishlist page
var wishlist = document.getElementsByClassName('bx-heart')[0];
wishlist.addEventListener('click', displayWishlist);

// click event to display contact page
var contact = document.getElementsByClassName('go-to-contact')[0];
contact.addEventListener('click', displayContact);

function displayMain(){
    document.getElementsByClassName('hero')[0].style.display = "block";
    document.getElementsByClassName('contact-sec')[0].style.display = "none";
    document.getElementsByClassName('shop-sec')[0].style.display = "none";
    document.getElementsByClassName('promotion')[0].style.display = "block";
    document.getElementsByClassName('product-sec')[0].style.display = "block";
    document.getElementsByClassName('product-sec')[1].style.display = "block";
    document.getElementsByClassName('special-product-sec')[0].style.display = "block";
    document.getElementsByClassName('footer-sec')[0].style.display = "block";
    document.getElementsByClassName('wishlist-sec')[0].style.display = "none";
    document.getElementsByClassName('cart-sec')[0].style.display = "none";
}

function displayCart(){
    document.getElementsByClassName('hero')[0].style.display = "none";
    document.getElementsByClassName('contact-sec')[0].style.display = "none";
    document.getElementsByClassName('shop-sec')[0].style.display = "none";
    document.getElementsByClassName('promotion')[0].style.display = "none";
    document.getElementsByClassName('product-sec')[0].style.display = "none";
    document.getElementsByClassName('product-sec')[1].style.display = "none";
    document.getElementsByClassName('special-product-sec')[0].style.display = "none";
    document.getElementsByClassName('footer-sec')[0].style.display = "none";
    document.getElementsByClassName('wishlist-sec')[0].style.display = "none";
    document.getElementsByClassName('cart-sec')[0].style.display = "block";
}

function displayWishlist(){
    document.getElementsByClassName('hero')[0].style.display = "none";
    document.getElementsByClassName('contact-sec')[0].style.display = "none";
    document.getElementsByClassName('shop-sec')[0].style.display = "none";
    document.getElementsByClassName('promotion')[0].style.display = "none";
    document.getElementsByClassName('product-sec')[0].style.display = "none";
    document.getElementsByClassName('product-sec')[1].style.display = "none";
    document.getElementsByClassName('special-product-sec')[0].style.display = "none";
    document.getElementsByClassName('footer-sec')[0].style.display = "none";
    document.getElementsByClassName('wishlist-sec')[0].style.display = "block";
    document.getElementsByClassName('cart-sec')[0].style.display = "none";
}

function displayContact(){
    document.getElementsByClassName('hero')[0].style.display = "none";
    document.getElementsByClassName('contact-sec')[0].style.display = "block";
    document.getElementsByClassName('shop-sec')[0].style.display = "none";
    document.getElementsByClassName('promotion')[0].style.display = "none";
    document.getElementsByClassName('product-sec')[0].style.display = "none";
    document.getElementsByClassName('product-sec')[1].style.display = "none";
    document.getElementsByClassName('special-product-sec')[0].style.display = "none";
    document.getElementsByClassName('footer-sec')[0].style.display = "none";
    document.getElementsByClassName('wishlist-sec')[0].style.display = "none";
    document.getElementsByClassName('cart-sec')[0].style.display = "none";
}


 