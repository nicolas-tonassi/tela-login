
// Função para testar acesso da página login.html
function verificaAcesso(){
    let 
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
 
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
   
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
   
});
 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    var email = document.getElementById('email').value.trim();
   

    }
);