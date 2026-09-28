# CEP — Conexão Entre os Povos

Site institucional do Ministério Conexão Entre os Povos (Kamilly Guimarães Patrocínio).

React + TypeScript + Vite + Tailwind 4 + Framer Motion.

## Estrutura

- `index.html`, `src/`, `public/`: o site
- `src/content/site.ts`: todo o conteúdo editável (textos, contato, Pix)
- `identidade/`: logo, paleta, elementos e fotos extraídos do manual de marca
- `netlify.toml`: build e cabeçalhos do deploy na Netlify

## Rodar

```bash
npm install
npm run dev
```

`npm run build` roda o `tsc` strict e gera `dist/`.

## Deploy

Na Netlify, basta conectar o repositório: o `netlify.toml` já define
`npm run build` como comando e `dist` como pasta publicada.

## Antes de publicar

Preencher em `src/content/site.ts` os campos marcados como PENDENTE
(WhatsApp e chave Pix).
