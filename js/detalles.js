const containerDetails=document.querySelector(".containerDetails");

const querySearch = document.location.search;

const id = new URLSearchParams(querySearch).get("id")

const product = data.products

const products = product.find(element => element._id == id)


containerDetails.innerHTML=` <div class="containerDetails__img">
<img src="${products.image}" alt="">
</div>

<div class="containerDetails__details">
<h3>${products.name}</h3>
<p class="containerDetails__details--price">$${products.price}</p>
<p class="containerDetails__details--cuot">3 cuotas sin interes en las tarjetas seleccionadas (<span>$${products.promo}</span>)</p>


<section class="containerDetails__details--confirm">
  <h4>Cantidad:</h4>
  <div class="containerDetails__details--btn">
    <button class="btn-less">-</button>
    <p class="product-count">1</p>
    <button class="btn-more">+</button>
  </div>

  <button class="containerDetails__details--confirm-btn">COMPRAR</button>

</section>

</div>`


const btnLess=document.querySelector(".btn-less");
const btnMore=document.querySelector(".btn-more");
const productCount=document.querySelector(".product-count");



let cont=1

btnMore.addEventListener("click",()=>{
  cont++;
  productCount.textContent=cont;
})

btnLess.addEventListener("click",()=>{
  if(productCount.textContent>1){
    cont--;
    productCount.textContent=cont;
  }

  
})
