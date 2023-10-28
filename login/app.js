
/* LOGIN */
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

/* voltar para página anterior */

function goBack() {
  window.history.back();
}

// VALIDAR O CADASTRO DO USUARIO 

let nome = document.querySelector('#nome')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


nome.addEventListener('keyup', ()=> {
  if(nome.value.length <= 3){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *insira no mínimo 4 caracteres*'
    nome.setAttribute('style', 'border-color: red')
    validUsuario = false
  }else{
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    nome.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

email.addEventListener('keyup', ()=> {
  if(email.value.length <= 4){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *insira no mínimo 5 caracteres*'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  }else{
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

senha.addEventListener('keyup', ()=> {
  if(senha.value.length <= 7){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *insira no mínimo 8 caracteres*'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  }else{
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

document.getElementById('login-form').addEventListener('submit', function(cadastro) {
  cadastro.preventDefault();

  if(validUsuario && validEmail && validSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      senhaCad: senha.value
    }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    msgSuccess.setAttribute('style', 'display:block')
    msgSuccess.innerHTML = 'Cadastrando Usuário...'
    msgError.setAttribute('style', 'display:none')
    msgError.innerHTML = ''

    setTimeout(()=>{
      window.location.href = 'login.html'
    }, 2000)
    

  }else{
    msgError.setAttribute('style', 'display:block')
    msgError.innerHTML = 'Preencha todos os campos corretamente'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display:none')
  }
});  


// AUTENTICAR O LOGIN




document.getElementById('meuFormulario').addEventListener('submit', function(event) {
 event.preventDefault(); 


  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let password = document.querySelector('#password')
  let passLabel = document.querySelector('#passLabel')

  let msgError = document.querySelector('#msgError')
  let listaUser = []

  let userValid = {
    nome: '',
    email: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {
    if(usuario.value == item.nomeCad && password.value == item.senhaCad){

      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad
      }

    }
  })

  if(usuario.value == userValid.nome && password.value == userValid.senha ){

    window.location.href = '../sistema/sistema.html'

    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    passLabel.setAttribute('style', 'color: red')
    password.setAttribute('style', 'border-color: red')

    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }

  
  
}); 
