function nomear(){
    let nome = document.getElementById('nomeId');
    if(nome.value.length == 0){
        alert('Preencha o campo corretamente!');
    }else{
        alert('Funcionou!');
    }
}