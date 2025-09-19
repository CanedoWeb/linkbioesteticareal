document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos que vamos manipular
    const introVideoContainer = document.querySelector('.video');
    const introVideo = document.querySelector('.video video');
    const headerContent = document.querySelector('.header-content');
    const mainContent = document.querySelector('main');

    // Função para revelar o conteúdo
    function revealContent() {
        setTimeout(() => {
            headerContent.style.opacity = '1';
            headerContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
            mainContent.style.visibility = 'visible';;
        }, 200); // 500ms = 0.5s
        // Mostra o conteúdo principal com a animação de fade-in definida no CSS

    }

    // Adiciona um "ouvinte" que chama a função 'revealContent' quando o vídeo terminar
    introVideo.addEventListener('ended', revealContent);
});