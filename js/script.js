// Controles de acessibilidade nas duas páginas.
const botaoTema = document.querySelector('#tema');
const botoesFonte = document.querySelectorAll('[data-fonte]');

function atualizarControles() {
  botaoTema.setAttribute('aria-pressed', pagina.dataset.bsTheme === 'dark');
  for (const botao of botoesFonte) {
    botao.setAttribute('aria-pressed', botao.dataset.fonte === pagina.dataset.fonte);
  }
}

botaoTema.addEventListener('click', () => {
  pagina.dataset.bsTheme = pagina.dataset.bsTheme === 'dark' ? 'light' : 'dark';
  salvarPreferencia('pata-tema', pagina.dataset.bsTheme);
  atualizarControles();
});

for (const botao of botoesFonte) {
  botao.addEventListener('click', () => {
    pagina.dataset.fonte = botao.dataset.fonte;
    salvarPreferencia('pata-fonte', pagina.dataset.fonte);
    atualizarControles();
  });
}

atualizarControles();

// Pesquisa e navegação entre as categorias do catálogo.
const pesquisa = document.querySelector('#pesquisa');

function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filtrarCatalogo() {
  const termos = normalizar(pesquisa.value).trim().split(/\s+/);
  for (const painel of document.querySelectorAll('.tab-pane')) {
    let encontrados = 0;
    for (const item of painel.querySelectorAll('[data-item]')) {
      const conteudo = normalizar(item.textContent);
      item.hidden = !termos.every(termo => conteudo.includes(termo));
      if (!item.hidden) encontrados += 1;
    }
    painel.querySelector('.vazio').hidden = encontrados > 0;
    if (painel.classList.contains('active')) {
      document.querySelector('#resultado').textContent =
        encontrados === 1 ? '1 item encontrado nesta aba.' : encontrados + ' itens encontrados nesta aba.';
    }
  }
}

if (pesquisa) {
  pesquisa.addEventListener('input', filtrarCatalogo);
  document.querySelector('#abas').addEventListener('shown.bs.tab', filtrarCatalogo);
  document.querySelector('#abrir-adocao').addEventListener('click', () => {
    const abaAdocao = document.querySelector('#aba-adocao');
    if (window.bootstrap) window.bootstrap.Tab.getOrCreateInstance(abaAdocao).show();
  });

  const galeria = document.querySelector('#galeria');
  const totalFotos = galeria.querySelectorAll('.carousel-item').length;
  galeria.addEventListener('slid.bs.carousel', evento => {
    document.querySelector('#galeria-status').textContent = 'Foto ' + (evento.to + 1) + ' de ' + totalFotos;
  });
}

// Formulários demonstrativos com feedback e validação do navegador.
const contato = document.querySelector('#form-contato');

if (contato) {
  const assunto = document.querySelector('#assunto');
  const nome = document.querySelector('#nome');
  const mensagem = document.querySelector('#mensagem');
  const retorno = contato.querySelector('.retorno');

  for (const link of document.querySelectorAll('[data-assunto]')) {
    link.addEventListener('click', () => {
      assunto.value = link.dataset.assunto;
      retorno.textContent = '';
    });
  }

  contato.addEventListener('input', () => {
    nome.setCustomValidity('');
    mensagem.setCustomValidity('');
    retorno.textContent = '';
  });

  contato.addEventListener('submit', evento => {
    evento.preventDefault();

    if (!nome.value.trim()) nome.setCustomValidity('Informe um nome válido.');
    if (mensagem.value.trim().length < 10) {
      mensagem.setCustomValidity('Digite pelo menos 10 caracteres na mensagem.');
    }
    if (!contato.reportValidity()) return;

    contato.reset();
    retorno.textContent = 'Simulação concluída. Nenhuma mensagem foi enviada.';
  });
}

const login = document.querySelector('#form-login');

if (login) {
  const codigo = document.querySelector('#codigo');
  const retorno = login.querySelector('.retorno');
  login.addEventListener('input', () => {
    retorno.textContent = '';
    codigo.removeAttribute('aria-invalid');
  });

  login.addEventListener('submit', evento => {
    evento.preventDefault();
    if (codigo.value !== 'pata123') {
      retorno.textContent = 'Código incorreto. Digite pata123 para experimentar.';
      codigo.setAttribute('aria-invalid', 'true');
      codigo.focus();
      return;
    }

    login.reset();
    retorno.textContent = 'Login demonstrativo concluído.';
  });
}
