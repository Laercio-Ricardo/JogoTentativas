let numeroSecreto = gerarNumeroAleatiorio();
let tentativas = 1

//Abaixo tem a função para exibir o html na tela, criando a tag, e após isso a função para exibir o texto na tela

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela('h1', 'Joguinho do Número Secreto');
exibirTextoNaTela('p' , 'Tente adivinhar o número secreto entre 1 e 20');

//Criando a funcção verificar chute
function verificarChute(){
    
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou .. uhuuuuh');
        //criando duas variaves, a primeira se o número for maior que 1 exibe o nome TENTATIVAS, senão, exbibe o nome TENTATIVA
        let palavraTentaviva = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentavivas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentaviva}!`;
        exibirTextoNaTela('p', mensagemTentavivas);

    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O Número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O Número secreto é maior');
        }
        } 
          //aqui ele some o numero de tentativas pelas vezes que tentou 
          tentativas ++;
    }

function gerarNumeroAleatiorio() {
    // math.random cria o numero aleatorio, e o parseInt cria so os inteiros de 1 até 10, e o return antes do parseInt retorna o número aleatorio
    return parseInt(Math.random() *10 + 1);
}