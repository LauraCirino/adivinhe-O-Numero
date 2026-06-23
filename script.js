let tentativas = 3;
let numeroCorreto = Math.floor(Math.random() * 5 ) + 1

function procurarTesouro(){
    let escolhaJogador = parseInt(document.getElementById("escolha").value);

    if(tentativas > 0){
        if(escolhaJogador === numeroCorreto){
            document.getElementById("resultado").innerText = "Parabéns, você achou o tesouro"
            tentativas = 0;
        }

        else if (tentativas > 1){
            tentativas--;
            document.getElementById("resultado").innerText = "Você encontrou uma armadilha! restam " + tentativas + " tentativa";
        }
        else{
            document.getElementById("resultaod").innerText = "GameOver ! você achou o monstro e não tem mais tentativas";
            tentativas = 0;
        }
    }
    else{
        document.getElementById("resultado").innerText = "suas tentativas acabraram"
    }
}