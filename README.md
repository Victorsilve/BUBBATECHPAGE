# Bubba Tech — Site

Site institucional e catálogo da Bubba Tech (Porto Alegre/RS).

## Rodar localmente
npm install
npm run dev

## Editar conteúdo
Tudo em `src/App.jsx`:
- `WHATSAPP` — número do WhatsApp
- `SERVICOS` — lista de serviços e preços
- `PRODUTOS` — catálogo (remova `esgotado: true` quando o item voltar ao estoque)

## Deploy
Build de produção: `npm run build` (saída em `dist/`). Hospedado via Vercel com deploy automático a cada push.
