// import { products } from "../data/product";


// const products = [{
//   image: "image/products/athletic-cotton-socks-6-pairs.jpg",
//   name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//   rating: {
//     stars: 4.5,
//     count: 87
//   },
//   priceCents: 1090,
// },
// {
//   image: "image/products/6-piece-white-dinner-plate-set.jpg",
//   name: "6-piece-white-dinner-plate-set",
//   rating: {
//     stars: 4,
//     count: 127
//   },
//   priceCents: 2095,
// },
// {
//   image: "image/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//   name: "adults-plain-cotton-tshirt-2-pack-teal",
//   rating: {
//     stars: 4,
//     count: 56
//   },
//   priceCents: 799,

// }];

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-image-container">         
      <img class="product-image" src="${product.image}" alt="stick baking">
      <div class="product-names">${product.name}</div>
      <div class="rating-star">
        <img class="image-rating" src="./image/ratings/rating-${product.rating.stars * 10}.png" alt="">
        <span class="rating-num">${product.rating.count}</span>
      </div>
      <div class="price">$${(product.priceCents / 100).toFixed(2)}</div>
      <select class="number-of-selected-product">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}" onclick="">Add to Cart</button>
      
    </div>
  `;

});


document.querySelector('.js-product-grid').innerHTML = productsHTML;

/*Add to cart button interactive */
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem){
      matchingItem.quantity +=1;
    } else {
      /* Add to the object to list of cart by using push */
      cart.push({
        productId: productId,
        quantity: 1
      });
    }

    /* To calculate total cart quantity */ 

    let cartquantity = 0;

    cart.forEach((item) => {
      cartquantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML= cartquantity;



    console.log(cart);
  });
});