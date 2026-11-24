// Aplicar antes de montar a página evita uma troca visível de tema.
const pagina = document.documentElement;

function lerPreferencia(chave) {
  try {
    return localStorage.getItem(chave);
  } catch {
    return null;
  }
}

function salvarPreferencia(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch {
    // Os controles continuam disponíveis quando o armazenamento está bloqueado.
  }
}

pagina.dataset.bsTheme = lerPreferencia('pata-tema') === 'dark' ? 'dark' : 'light';
const fonteSalva = lerPreferencia('pata-fonte');
pagina.dataset.fonte = ['grande', 'extra'].includes(fonteSalva) ? fonteSalva : 'normal';
