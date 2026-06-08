# Design Philosophy & Personalização - VERTEBRA Studio

Este documento detalha o racional estético e técnico do site VERTEBRA, construído para ser um template escalável para múltiplos estúdios de tatuagem de alto padrão.

## Estética: Skin Dark Tattoo
O objetivo é transmitir um clima "editorial sombrio", como um catálogo de arte contemporânea ou um lookbook de moda focado em blackwork e realismo dark.

- **Paleta de Cores:**
  - Background: Preto profundo (`#0A0A0A`)
  - Accent: Vermelho sangue (`#8B0000`)
  - Texto Principal: Off-white (`#F5F5F5`)
  - Texto Secundário: Cinza (`#8A8A8A`)
  - Superfícies/Cards: Preto menos denso (`#141414`)
  - Bordas Sutis: Branco com 8% de opacidade

- **Tipografia:**
  - Display Primária: Pirata One - Traz estética gótica/blackletter para logos, títulos curtos e números de impacto.
  - Display Secundária: Playfair Display (Peso 900/Black) - Para textos display longos e frases editoriais, mantendo charme brutalista sem perder legibilidade.
  - Body: Inter (Pesos 400, 500) - Garante máxima legibilidade.
  - Labels e Monospace: JetBrains Mono - Adiciona o toque de "documento" e precisão técnica.

- **Comportamentos Relevantes:**
  - Marquee: Faixa rolante infinita para reforço de estilo.
  - Respiros Longos: Margens amplas entre seções, forçando uma rolagem deliberada e contemplativa.
  - Custom Cursor & Loader: Interações sutis que trazem uma camada "premium", opcionais por cliente.

## Estrutura de Componentes
Todos os componentes são modulares. Animações vivem em wrappers específicos (ex: `<FadeUp>`, `<MaskReveal>`) para evitar poluição lógica nos componentes visuais.

## Como customizar para um novo cliente

Para reutilizar esta base para outro tatuador/estúdio, siga RIGOROSAMENTE esta ordem:

1. **`lib/config.ts`**: Atualize o nome do estúdio, cidade, contatos e flags de features (como desativar cursor ou loader se o cliente não quiser).
2. **`lib/content.ts`**: Substitua a biografia, as tags de estilos e os textos descritivos e do processo.
3. **`lib/portfolio-data.ts`**: Atualize os metadados das imagens, listando os trabalhos com seus devidos alts, tamanhos e áreas do corpo trabalhadas.
4. **`public/portfolio/`**: Adicione as imagens correspondentes definidas no passo 3. O nome do arquivo deve bater com o que foi cadastrado.
5. **Fotos Principais**: Substitua imagens chave se existirem externamente (hero ou foto do artista) mapeadas no respectivo componente ou nas variáveis centralizadas em `config.ts` se você optar por gerenciar as URLs do hero por lá.
6. **`app/globals.css`** (Opcional): Se o cliente quiser uma paleta diferente (ex: Dark/Gold ou Minimal/White), atualize as variáveis `--background`, `--foreground`, `--accent`, etc. Toda a UI irá herdar automaticamente as novas cores sem a necessidade de editar arquivos de componentes.
