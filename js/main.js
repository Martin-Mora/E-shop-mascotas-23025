const hamburger= document.querySelector('.hamburger');
const navOcult= document.querySelector('.navOcult');
const navHidden = document.querySelector('.x');
const containerCards = document.querySelector('.container-flex');
const modal_background= document.querySelector('.modal-background');


// menu responsive
hamburger.addEventListener('click',()=>{
  navOcult.classList.toggle('navOcult')
  modal_background.style.display = 'block';
})

navHidden.addEventListener('click',()=>{
  navOcult.classList.toggle('navOcult')
  modal_background.style.display = 'none';
})

// modal
modal_background.addEventListener('click',()=>{
  modal_background.style.display = 'none';
  navOcult.classList.toggle('navOcult');
})


