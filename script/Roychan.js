import { products } from "../data/product";


const products = [{
  image: "images/products/athletic-cotton-socks-6-pairs.jpg",
  name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090,
},
{
  image: "image/products/6-piece-white-dinner-plate-set.jpg",
  name: "6-piece-white-dinner-plate-set",
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095,
},
{
  image: "image/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  name: "adults-plain-cotton-tshirt-2-pack-teal",
  rating: {
    stars: 4,
    count: 56
  },
  priceCents: 799,

}];

products.forEach((product) => {
  const html = `
    <div class="product-image-container">         
      <img class="product-image" src="./image/products/6-piece-non-stick-baking-set.webp" alt="stick baking">
      <div class="product-names">6-piece-non-stick-baking-set</div>
      <div class="rating-star">
        <img class="image-rating" src="./image/ratings/rating-05.png" alt="">
        <span class="rating-num">85</span>
      </div>
      <div class="price">$10.90</div>
      <select class="number-of-selected-product">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button class="add-to-cart js-add-to-cart" onclick="">Add to Cart</button>
      
    </div>
  `;

  console.log(html);

});



document.querySelector('.js-add-to-cart').innerHTML;