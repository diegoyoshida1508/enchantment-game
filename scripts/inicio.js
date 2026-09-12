['personagem-1', 'personagem-2', 'personagem-3'].forEach(id => {
    const div = document.getElementById(id);

    div.addEventListener('mouseover', () => {
        tocarSelecao();
    })

});


function tocarSelecao() {
    const audio = document.getElementById('selecao');
    audio.play();
}


function selecionarPersonagem(evento) {
    sessionStorage.setItem('personagem', evento.target.id)
    navigation.navigate('cenario1.html')
}

function exibirTeclaE() {

}

function abrirModal() {

}