function guardarEmail() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome === "" && email=== ""){
        alert("OPS, é necessário informar o nome e email!")

    }else{
              
        localStorage.setItem('nomeCadastrado', nome);
        localStorage.setItem('emailCadastrado', email);
        
        alert("Realizou Uma Ótima, Escolha,  Obrigado Pelo Seu Cadastro Olá Querid@ usuári@, em breve você recebéra um email, Com o código de desconto para adiquirir os seus ingressos.");
        
    };


    
   
}


$('.carousel').carousel()