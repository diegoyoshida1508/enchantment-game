['personagem-A', 'personagem-B', 'personagem-C'].forEach(id => {
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
    sessionStorage.setItem('turma', 'BARE')
    navigation.navigate('cenario1.html')
}

function exibirTeclaE() {

}

function abrirModal() {

}