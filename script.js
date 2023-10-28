function nomear(){
    let nome = document.getElementById('nomeId').value;
    let senhaInput = document.getElementById('senhaId').value;
    
    if(nome.length == 0 || senhaInput.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        alert('Funcionou!');
        localStorage.setItem('nome', nome);
        window.location.href = 'janelaJogos.html';

    }
}

function bemVindo(){
    let nomeUsuario = localStorage.getItem('nome'); 
    console.log(nomeUsuario);
    let novaMensagem = document.querySelector('.mensagemBoasVindas');
    novaMensagem.textContent = `Bem vindo(a) ${nomeUsuario}!`;




}