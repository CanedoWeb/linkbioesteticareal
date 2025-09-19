document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos que vamos manipular
    const introVideo = document.querySelector('.video video');
    const headerContent = document.querySelector('.header-content');
    const mainContent = document.querySelector('main');

    // Função para revelar o conteúdo
    function revealContent() {
        setTimeout(() => {
            headerContent.style.opacity = '1';
            headerContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
            mainContent.style.visibility = 'visible';
        }, 200); // Pequeno delay para garantir que a transição CSS ocorra.
    }

    // Adiciona um "ouvinte" que chama a função 'revealContent' quando o vídeo terminar
    introVideo.addEventListener('ended', revealContent);

    // Tenta reproduzir o vídeo. Alguns navegadores (especialmente em dispositivos móveis)
    // podem bloquear o autoplay.
    const playPromise = introVideo.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // A reprodução automática falhou.
            // Isso é comum no iOS se o vídeo não estiver com 'muted' e 'playsinline'
            // ou se o usuário estiver em modo de economia de energia.
            console.warn("A reprodução automática do vídeo falhou. Revelando o conteúdo diretamente.", error);
            // Como alternativa, revelamos o conteúdo imediatamente.
            revealContent();
        });
    }
});