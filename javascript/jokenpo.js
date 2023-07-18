
let pontosUsuario = 0;
let pontosCpu = 0;
let pontosEmpate = 0;
function jogar (jogada) {
    //saber qual foi a jogada do usuário

    //Fazer a jogada do CPU
    var aleatorio = Math.floor(Math.random() * 3);
    let img = document.getElementById("weaponcp");
    let result = document.getElementById("result");

    switch(aleatorio){
        case 0:
            img.src="../assets/pedra.png";
            break;
        case 1:
            img.src="../assets/papel.png";
            break;
        case 2:
            img.src="../assets/tesoura.png";
            break;
    }

    if((jogada == 0 && aleatorio == 0) || (jogada == 1  && aleatorio == 1) || (jogada == 2  && aleatorio == 2)){
        result.innerHTML="Empatou!";
        pontosEmpate = pontosEmpate + 1;
    }
    else if((jogada == 0 && aleatorio == 2) || (jogada == 1  && aleatorio == 0) || (jogada == 2  && aleatorio == 1)){
        result.innerHTML="Você venceu!";
        pontosUsuario = pontosUsuario + 1;
    } 
    else {
        result.innerHTML="CPU venceu!";
        pontosCpu = pontosCpu + 1;
    }

    document.querySelector('#pontosEmpate').innerHTML= pontosEmpate;
    document.querySelector('#pontosUsuario').innerHTML= pontosUsuario;
    document.querySelector('#pontosCpu').innerHTML= pontosCpu;
}
//recomeça o jogo
function zerar () {
    let img = document.getElementById("weaponcp");
    img.src="../assets/papel.png";
    document.querySelector('#pontosEmpate').innerHTML= 0;
    document.querySelector('#pontosUsuario').innerHTML= 0;
    document.querySelector('#pontosCpu').innerHTML= 0;
}

/*window.onload = function() {
    let bola = document.getElementById("follow");
    console.log(bola);
    
    let animaBola = (evt) => {
        let mouseX = evt.clientX;
        let mouseY = evt.clientY;
        let acc = 2;
    
        bola.styles.top += (mouseY - bola.styles.top) / acc;
        bola.styles.left += (mouseX - bola.styles.left) / acc;
    }
    
    window.addEventListener('mousemove', animaBola);
}*/