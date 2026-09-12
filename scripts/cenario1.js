const TECLAS_USADAS = [37, 39, 69];

var bloquearAvanco = false;

document.addEventListener('click', () => {
    const audio = document.getElementById('tema');
    audio.play();
}, { once: true });

(() => {
    const letra = buscarLetraPersonagemSelecionado();
    const divPersonagem = document.querySelector('.personagem');
    divPersonagem.style.background = `url('../assets/animacoes/personagem ${letra}/animacao_personagem${letra}/personagem${letra}_parado_direita.png')`
})();


document.querySelector('.tecla-som').addEventListener('click', () => {
    const audio = document.getElementById('tema');
    if (audio.stopped) {
        audio.play();
    } else {
        audio.stop();
    }
})

document.addEventListener('keyup', (evento) => {
    if (evento.keyCode === 69 && bloquearAvanco) {
        const modal = document.querySelector('.modal');
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        return;
    }

    if (!TECLAS_USADAS.includes(evento.keyCode) || bloquearAvanco) return;
    const personagem = document.querySelector('.personagem');
    if (evento.keyCode === 39) {
        alterarDirecao('direita')
        let novaPosicao = removerPixels(window.getComputedStyle(personagem).left) + 15;
        personagem.style.left = `${novaPosicao}px`;
        validarPosicao(novaPosicao)
    }

    if (evento.keyCode === 37) {
        alterarDirecao('esquerda')
        personagem.style.left = `${removerPixels(window.getComputedStyle(personagem).left) - 15}px`;
    }

    executarSomCaminhada();
})

function validarPosicao(novaPosicao) {
    if (novaPosicao >= 445) {
        bloquearAvanco = true;
        const teclaE = document.querySelector('.tecla-e');
        teclaE.style.display = 'flex';
    }
}


function buscarLetraPersonagemSelecionado() {
    const personagem = sessionStorage.getItem('personagem');
    return personagem.split('-')[1]
}

function executarSomCaminhada() {
    const audio = new Audio('../assets/audios/caminhada.mp3');
    audio.playbackRate = 2.0;
    audio.play();
}


function alterarDirecao(direcao = 'esquerda') {
    const letra = buscarLetraPersonagemSelecionado();
    const divPersonagem = document.querySelector('.personagem');
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            if (i % 2 == 0) {
                divPersonagem.style.background = `url('../assets/animacoes/personagem ${letra}/animacao_personagem${letra}/personagem${letra}_parado_${direcao}.png')`
            } else {
                divPersonagem.style.background = `url('../assets/animacoes/personagem ${letra}/animacao_personagem${letra}/personagemA_mov_${direcao}.png')`
            }
        }, 100)
    }
    divPersonagem.style.background = `url('../assets/animacoes/personagem ${letra}/animacao_personagem${letra}/personagem${letra}_mov_${direcao}.png')`
}



function removerPixels(valorComPixels) {
    return Number(valorComPixels.replace('px', ''))
}
