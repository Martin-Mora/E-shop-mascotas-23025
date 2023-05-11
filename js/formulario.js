const inputName = document.querySelector(".nombre"); //selecciona el elemento input
const inputApe = document.querySelector(".apellido");
const inputTel = document.querySelector(".telefono");
const inputEmail = document.querySelector(".email");


const errorName = document.querySelector(".form_error_nom"); //selecciona el elemento input
const errorApe = document.querySelector(".form_error_ape");
const errorTel = document.querySelector(".form_error_tel");
const errorEmail = document.querySelector(".form_error_email");

const modalForm= document.querySelector(".modal-form");
const btnModalCerrar= document.querySelector(".modal-form__container--btCerrar");


const btnEnviar = document.querySelector(".btn-enviar");
// const form = document.querySelector(".contenedor_formulario__form");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  
if(validarInputs()){
  modalForm.style.display="block";
  btnModalCerrar.addEventListener("click",()=>{
  const allInput=document.querySelectorAll("input:not(:last-child)");
  const textArea=document.querySelector(".form_error_msg")
  
  allInput.forEach(input => {
      input.value="";
  });

  textArea.value="";
    
  modalForm.style.display="none";
  })

}


});




//funciones

function validarInputs(){
  validarNombre();
  validarApe();
  validarTel();
  validarEmail();

  if(validarNombre()&&validarApe()&&validarTel()&&validarEmail()){
    return true;
  }
}

function validarNombre() {

    if(inputName.value.length==0){
      errorName.classList.add("error");
      errorName.textContent="No puede estar vacio";
    }else{
      errorName.classList.remove("error");
      errorName.textContent="";
      return true;
    }

}


function validarApe() {
  if(inputApe.value.length==0){
    errorApe.classList.add("error");
    errorApe.textContent="No puede estar vacio";
  }else{
    errorApe.classList.remove("error");
    errorApe.textContent="";
    return true;
  }
}

//validar telefono
function validarTel() {
  if(inputTel.value.length==0){
    errorTel.classList.add("error");
    errorTel.textContent="No puede estar vacio";
  }else{
    errorTel.classList.remove("error");
    errorTel.textContent="";
    if(validarTel2()){
      return true;
    };
    
    
  }
}

function validarTel2(){
  if (inputTel.value.length<10 || inputTel.value.length>15) {
    errorTel.classList.add("error");
    errorTel.textContent="minimo 8 y maximo 15 caracteres";
  }else{
    errorTel.classList.remove("error");
    errorTel.textContent="";
    return true;
  }
}


// validar email

function validarEmail() {
  if(inputEmail.value.length==0){
    errorEmail.classList.add("error");
    errorEmail.textContent="No puede estar vacio";
  }else{
    errorEmail.classList.remove("error");
    errorEmail.textContent="";
    if(validarEmail2()){
      return true;
    };
  }
}

function validarEmail2(){
  for (let i = 0; i < inputEmail.value.length; i++) {
    if(inputEmail.value.includes("@")){
      errorEmail.classList.remove("error");
      errorEmail.textContent="";
      return true;
    }else{
      errorEmail.classList.add("error");
      errorEmail.textContent="Debe ser un email valido (@ incluido)";
    }
    
  }
} 


