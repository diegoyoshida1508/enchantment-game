document.addEventListener('click', () => {
    const audio = document.getElementById('tema');
    audio.play();
}, { once: true });

document.querySelector('.mute').addEventListener('click', ()=>{
    document.getElementById('tema').pause();
})

document.addEventListener('keyup', (evento) => {
    if (evento.keyCode === 39) {
        const personagem = document.getElementById('personagem');
        personagem.classList.add('animar-personagem')
        personagem.style.left = `${removerPixels(window.getComputedStyle(personagem).left) + 5}px`;
    }
})

document.addEventListener('animationend', () => {
    document.getElementById('personagem').classList.remove('animar-personagem');
    document.getElementById('pular').pause();
});

document.addEventListener('animationstart', () => {
    document.getElementById('pular').play();
});






function removerPixels(valorComPixels) {
    return Number(valorComPixels.replace('px', ''))
}
