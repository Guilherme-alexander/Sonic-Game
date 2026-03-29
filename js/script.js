const tela = document.querySelector('.tela');
const telaGameOver = document.querySelector('.TelaGameOver');
const btnStart = document.querySelector('.Start');

const Sonic = document.querySelector('.player');
const espinho = document.querySelector('.espinho');

const ponto = document.querySelector('.ponto');
const pontuacaoFinal = document.querySelector('.pontuacao');

// CONFIG
let pontos = 0;
let gameRodando = true;
let debug = false;

// HITBOX
const debugSonic = document.createElement('div');
const debugEspinho = document.createElement('div');

debugSonic.classList.add('debug-box');
debugEspinho.classList.add('debug-box');

document.body.appendChild(debugSonic);
document.body.appendChild(debugEspinho);

// FUNÇÃO DE PULO (AGORA EXISTE)
function jump() {
    if (!Sonic.classList.contains('jump')) {
        Sonic.classList.add('jump');

        setTimeout(() => {
            Sonic.classList.remove('jump');
        }, 500);
    }
}

// INPUT (CLICK + TECLADO)
document.addEventListener('click', () => {
    jump();
});

document.addEventListener('keydown', (e) => {

    // suporta SPACE em todos navegadores
    if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        jump();
    }
});

// GAME OVER
function gameOver() {
    gameRodando = false;

    Sonic.src = 'styleSheet/sonic-2.gif';

    pontuacaoFinal.innerHTML = pontos;

    setTimeout(() => {
        telaGameOver.style.display = 'flex';
    }, 500);

    clearInterval(loop);
}

btnStart.addEventListener('click', () => {
    window.location.reload();
});

// GAME LOOP
const loop = setInterval(() => {

    if (!gameRodando) return;

    const espinhoRect = espinho.getBoundingClientRect();
    const sonicRect = Sonic.getBoundingClientRect();

    const colisao =
        espinhoRect.left < sonicRect.right &&
        espinhoRect.right > sonicRect.left &&
        espinhoRect.top < sonicRect.bottom &&
        espinhoRect.bottom > sonicRect.top;

    if (colisao) {

        espinho.style.animation = 'none';
        espinho.style.left = `${espinho.offsetLeft}px`;

        Sonic.style.animation = 'none';
        Sonic.style.bottom = window.getComputedStyle(Sonic).bottom;

        gameOver();
    } else {
        pontos++;
        ponto.innerHTML = pontos;
    }

    // DEBUG VISUAL
    if (debug) {
        const s = sonicRect;
        const e = espinhoRect;

        debugSonic.style.left = s.left + 'px';
        debugSonic.style.top = s.top + 'px';
        debugSonic.style.width = s.width + 'px';
        debugSonic.style.height = s.height + 'px';

        debugEspinho.style.left = e.left + 'px';
        debugEspinho.style.top = e.top + 'px';
        debugEspinho.style.width = e.width + 'px';
        debugEspinho.style.height = e.height + 'px';
    }

}, 10);
