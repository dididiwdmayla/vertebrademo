# VERTEBRA Studio - Institutional One-Page

Este repositório contém o código fonte do site VERTEBRA Studio. Criado utilizando Next.js App Router, Tailwind CSS, e Framer Motion. 

É um projeto estático, puramente focado em conversão e branding (zero backend ativo, baseando chamadas de ação para o WhatsApp).

## Setup Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse em `http://localhost:3000`.

## Scripts Úteis

- `npm run build` - Roda o build de produção.
- `npm run lint` - Verifica regras do ESLint.

## Deploy na Vercel

O projeto foi projetado para "Zero-Config Deploy" na Vercel:

1. Suba este código para um repositório no GitHub/GitLab.
2. Na Vercel, crie um "New Project" e importe o repositório.
3. Os settings padrões do Next.js (Root Directory `.`, Build Command `npm run build`, Install Command `npm install`) vão funcionar sem necessidade de configurações adicionais.
4. Clique em "Deploy".

## Customização
Para adaptar esse template a outro estúdio, consulte o arquivo `Design.md` na raiz do projeto. 
Lá você encontrará a lista centralizada de arquivos que concentram as informações (como textos, endereços e paletas).
