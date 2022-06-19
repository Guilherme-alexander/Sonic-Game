//tela do game
const tela_Inicio_De_Jogo = document.querySelector('.tela');
//tela game over
const tela_Fim_De_Jogo = document.querySelector('.TelaGameOver');

//botão de restart
const ButtonStart = document.querySelector('.Start');

//player
const Sonic = document.querySelector('.player');
//obstaculo
const espinho = document.querySelector('.espinho');

//pontuação atual do jogador
var ponto = document.querySelector('.ponto');

//pontuação final do jogador
var pontuacaoFinal = document.querySelector('.pontuacao');

//evento de pulo do personagem
const jump = () =>{
    Sonic.classList.add('jump');
    //clear Jump
    setTimeout(()=>{
        Sonic.classList.remove('jump');
    },500);
}

function gameOver(){
//troca img do sonic quando levar dano 
    Sonic.src = 'styleSheet/sonic-2.gif';

//mostrar pontos
    pontuacaoFinal.innerHTML = ponto.innerHTML;
//tela game over
    setTimeout(()=>{
    tela_Fim_De_Jogo.style.display = 'flex';
    },1000);

    // ButtonStart.addEventListener('click',()=>{ window.location.reload () });
    
}

//renderisação e validação do game

    const loop = setInterval(() => {
    
        const posicaoEspinho = espinho.offsetLeft;
        const posicaoSonic = +window.getComputedStyle(Sonic).bottom.replace('px', ' ');
           
            //validação de colisão
            if(posicaoEspinho < 40 && posicaoEspinho > 0 && posicaoSonic < 50){

                espinho.style.animation = 'none';
                espinho.style.left = `${posicaoEspinho}px`;

                Sonic.style.animation = 'none';
                Sonic.style.bottom = `${posicaoSonic}px`;
                Sonic.style.bottom = `10px`;

                gameOver();

            }else{
                ponto.innerHTML++;
                clearInterval();
            }
        
    }, 10);

    
document.addEventListener('click', jump);