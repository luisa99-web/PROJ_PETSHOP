# Verificação da interface

Testes funcionais executados no Microsoft Edge com Playwright em 24/11/2026.

| Cenário | Verificação |
| --- | --- |
| Teclado | Tab alcança o atalho de conteúdo. Enter move o foco ao conteúdo. Seta direita alterna as abas. |
| Carrossel | Abertura na foto 1, avanço até a foto 2 e retorno à foto 1 pelos controles. |
| Catálogo | Busca por “vacinacao” encontra Vacinação. A consulta persiste ao trocar de aba. “Nina” mostra apenas o perfil correspondente. |
| Contato | Interesse em Nina preenche o assunto. Nome vazio e nome só com espaços são rejeitados. Dados de teste válidos exibem confirmação. |
| Login | Código incorreto exibe orientação. Código de demonstração válido exibe confirmação. |
| Preferências | Tema escuro e fonte extra permanecem ao passar da landing page ao login. |
| Responsividade | Em uma janela de 320 px com fonte extra, a página inicial cabe na largura disponível. |
| Carregamento | Bootstrap e imagem de abertura carregaram. A execução não registrou erros de scripts ou respostas HTTP de erro. |

## Contraste

Relações calculadas a partir dos valores hexadecimais com a fórmula de luminância relativa da [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

| Uso | Primeiro plano | Fundo | Relação |
| --- | --- | --- | --- |
| Texto do tema claro | #26332D | #FFF9F0 | 12,59:1 |
| Títulos na faixa clara | #285A49 | #DDE9DA | 6,32:1 |
| Texto no botão claro | #FFF9F0 | #285A49 | 7,57:1 |
| Texto escuro sobre fundo geral | #F5F5F0 | #121A16 | 16,20:1 |
| Links nos cartões escuros | #A8D5BA | #202E26 | 8,71:1 |
| Texto no botão escuro | #121A16 | #A8D5BA | 10,88:1 |
| Texto sobre caramelo | #26332D | #D9A05B | 5,73:1 |
| Borda de campo claro | #66786C | #FFF9F0 | 4,49:1 |
| Foco sobre faixa escura | #D9A05B | #283D32 | 5,06:1 |

O nível AA define 4,5:1 para texto normal e 3:1 para texto grande, conforme 1.4.3. O critério 1.4.11 usa 3:1 para informações visuais necessárias à identificação de componentes e estados. As checagens registram critérios e cenários selecionados. Uma avaliação integral exigiria cobertura adicional, incluindo tecnologias assistivas.

## Capturas

1. [Abertura e carrossel](prints/01-inicio.png)
2. [Cartões de serviços](prints/02-servicos.png)
3. [Pesquisa na aba de adoção](prints/03-busca-adocao.png)
4. [Contato após envio simulado](prints/04-contato.png)
5. [Etapas de adoção](prints/05-adocao.png)
6. [Tema escuro e controles de fonte](prints/06-acessibilidade.png)
7. [Login demonstrativo](prints/07-login.png)
8. [Visualização de 320 px](prints/08-celular.png)
