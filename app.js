//criando a variavel para guardar os numero ja sorteados, os colchetes criam uma lista vazia

let listaDeNumerosSorteados = [];
// Abaixo estou criando a variavel número secreto e gerando os número aleatoriamente,
// e no let tentativas ele começa a contar
let numeroSecreto = gerarNumeroAleatiorio();
let tentativas = 1;

//Abaixo tem a função para exibir o html na tela, criando a tag, e após isso a função para exibir o texto na tela

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
//Chama a função exibir Mensagem incial
exibirMensagemInicial();

 //função para exibir a frase incial do  jogo quando o jogo for reiniciado

 function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Joguinho do Número Secreto');
    exibirTextoNaTela('p' , 'Tente adivinhar o número secreto entre 1 e 20');
 }


//Criando a funcção verificar chute
function verificarChute(){
    
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou .. uhuuuuh');
        //criando duas variaves, a primeira se o número for maior que 1 exibe o nome TENTATIVAS, senão, exbibe o nome TENTATIVA
        let palavraTentaviva = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentavivas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentaviva}!`;
        exibirTextoNaTela('p', mensagemTentavivas);
        //aqui ele selcione o elemnto por id
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O Número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O Número secreto é maior');
        }
        } 
          //aqui ele soma o numero de tentativas pelas vezes que tentou 
          tentativas ++;
          limparCampo();

    }

function gerarNumeroAleatiorio() {
    // math.random cria o numero aleatorio, e o parseInt cria so os inteiros de 1 até 10
    // O let numeroEscolhido cria a variavel, e com o if vamos criar uma condição para o número nao ser escolhido duas vezes
          let numeroEscolhido = parseInt(Math.random() *10 + 1);
          //Limitando o número de elementos, o codigo abaixo informa que se a quantidade de elementos for os 10, limpa a lista
          let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
          if(quantidadeDeElementosNaLista == 10){
            listaDeNumerosSorteados = [];
          }
          //Abaixo o meto inclue o numero escolhido
          if(listaDeNumerosSorteados.includes(numeroEscolhido)){
           // Se ja foi escolhido, gera um numero aleatorio
            return gerarNumeroAleatiorio()
        
            }else{// Se nao for escolhido , retorna o numero escolhido, o push serve pra isso
                listaDeNumerosSorteados.push(numeroEscolhido);
                console.log(listaDeNumerosSorteados);
                return numeroEscolhido;

            }
}
//Abaixo a função limpar campo, lá em cima onde tem limpar campo baixo de tentativas é chamada aqui
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
  }

  //função de reiniciar o jogo, pegando o numero reiniciar la do html
  function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatiorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
  }
