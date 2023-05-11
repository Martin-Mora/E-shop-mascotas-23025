const container=document.querySelector('.productos__grid');
const selectProductos= document.querySelector('.productos');




renderCards();


//filtros
selectProductos.addEventListener('change',(e)=>{
  console.log(e.target.value) ;

  if(e.target.value=="producto"){
    renderCards();
    }

  if(e.target.value=="comida gato"){
  mostrarComidaGato();
  }

  if(e.target.value=="comida perro"){
    mostrarComidaPerro();
    }

  if(e.target.value=="juguetes"){
    mostrarJuguetes();
    }
  
  if(e.target.value=="otros"){
    mostrarOtros();
    }
  
})






// funciones

function renderCards(){
  let card='';
  let productos=data.products

  productos.forEach(element=> {
    card+=` <div class="card">
    <div class="card__img">
      <img src="${element.image}" alt="">
    </div>

    <div class="description">
      <h5 class="description__title">${element.name} </h5>
      <p class="description__card">${element.description}</p>
      ${element.kg ? `<p class="description__kg">${element.kg}</p>` : ''}
      <p class="description__price"> <span class="precio">Precio:</span> $${element.price}</p>
      <a href="./detalles.html?id=${element._id}" class="description__btn">Detalles</a>
    </div>
  </div>
  `
  } )

  container.innerHTML=card;
}



function mostrarComidaGato(){
  let card='';
  let productos=data.products

  productos.forEach(element=> {

    if(element.category=="comida gato"){

      card+=` <div class="card">
      <div class="card__img">
        <img src="${element.image}" alt="">
      </div>
  
      <div class="description">
        <h5 class="description__title">${element.name}</h5>
        <p class="description__card">${element.description}</p>
        ${element.kg ? `<p class="description__kg">${element.kg}</p>` : ''}
        <p class="description__price"> <span class="precio">Precio:</span> $${element.price}</p>
        <a href="./detalles.html?id=${element._id}" class="description__btn">Detalles</a>
      </div>
    </div>
    `
    }

  } )

  container.innerHTML=card;
}


function mostrarComidaPerro(){
  let card='';
  let productos=data.products

  productos.forEach(element=> {

    if(element.category=="comida perro"){

      card+=` <div class="card">
      <div class="card__img">
        <img src="${element.image}" alt="">
      </div>
  
      <div class="description">
        <h5 class="description__title">${element.name}</h5>
        <p class="description__card">${element.description}</p>
        ${element.kg ? `<p class="description__kg">${element.kg}</p>` : ''}
        <p class="description__price"> <span class="precio">Precio:</span> $${element.price}</p>
        <a href="./detalles.html?id=${element._id}" class="description__btn">Detalles</a>
      </div>
    </div>
    `
    }

  } )

  container.innerHTML=card;
}


function mostrarJuguetes(){
  let card='';
  let productos=data.products

  productos.forEach(element=> {

    if(element.category=="juguetes"){

      card+=` <div class="card">
      <div class="card__img">
        <img src="${element.image}" alt="">
      </div>
  
      <div class="description">
        <h5 class="description__title">${element.name}</h5>
        <p class="description__card">${element.description}</p>
        ${element.kg ? `<p class="description__kg">${element.kg}</p>` : ''}
        <p class="description__price"> <span class="precio">Precio:</span> $${element.price}</p>
        <a href="./detalles.html?id=${element._id}" class="description__btn">Detalles</a>
      </div>
    </div>
    `
    }

  } )

  container.innerHTML=card;
}


function mostrarOtros(){
  let card='';
  let productos=data.products

  productos.forEach(element=> {

    if(element.category=="otros"){

      card+=` <div class="card">
      <div class="card__img">
        <img src="${element.image}" alt="">
      </div>
  
      <div class="description">
        <h5 class="description__title">${element.name}</h5>
        <p class="description__card">${element.description}</p>
        ${element.kg ? `<p class="description__kg">${element.kg}</p>` : ''}
        <p class="description__price"> <span class="precio">Precio:</span> $${element.price}</p>
        <a href="./detalles.html?id=${element._id}" class="description__btn">Detalles</a>
      </div>
    </div>
    `
    }

  } )

  container.innerHTML=card;
}