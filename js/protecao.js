// Se não houver login feito, volta para a tela de login
if (sessionStorage.getItem('logado') !== 'sim') {
  window.location.replace('/front-end/index.html');
}

// Para um botão "Sair", se você quiser depois
function sair() {
  sessionStorage.removeItem('logado');
  window.location.replace('/front-end/index.html');
}