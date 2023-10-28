

const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};


function submitFormAndRedirect() {
    var emailInput = document.getElementById("emailInput").value;

    // Verifica se o campo de email está vazio
    if (!emailInput) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Por favor, insira seu email antes de continuar.",
        });
    } else if (!emailInput.includes('@')) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Por favor, insira o caractere '@' no seu email antes de continuar."
        });
    } else if (emailInput.split('@')[1].length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Por favor, insira um domínio após o '@' no seu email antes de continuar."
        });
    } else {
        // Redirecione para a página desejada
        window.location.href = "login/login.html";
    }
}

//SISTEMA

