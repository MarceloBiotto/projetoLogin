function nomear(){
    let nome = document.getElementById('nomeId');
    let senhaInput = document.getElementById('senhaId');
    if(nome.value.length == 0 || senhaInput.value.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        alert('Funcionou!');

    }
}