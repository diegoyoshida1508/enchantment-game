// Agrupa os três IDs em uma lista e aplica a lógica para cada um deles
['personagem-1', 'personagem-2', 'personagem-3'].forEach(id => {
    const svg = document.getElementById(id);

    // Garante que o elemento existe na página antes de aplicar o evento
    if (svg) {
        svg.addEventListener('load', () => {
            svg.pauseAnimations();
        });
        svg.addEventListener('mouseover', () => {
            svg.unpauseAnimations();
        });
        svg.addEventListener('mouseleave', () => {
            svg.pauseAnimations();
        });
    }
});
