# OUXE Distribuidor - PWA

Site PWA pronto para GitHub Pages com ícone de instalação (seta para baixo) na barra de pesquisa.

## Arquivos PWA gerados:
- manifest.json
- sw.js (service worker)
- icon-32.png, icon-192.png, icon-512.png
- .nojekyll

## Como hospedar no GitHub Pages:
1. Crie um repositório no GitHub (ex: ouxe-distribuidor)
2. Envie TODOS os arquivos desta pasta para o repositório:
   - index.html (ou indexnew.html renomeado)
   - manifest.json
   - sw.js
   - todos os icon-*.png
   - .nojekyll
3. Vá em Settings > Pages
4. Source: Deploy from a branch, Branch: main, Folder: / (root)
5. Salve e aguarde o link https://seuusuario.github.io/ouxe-distribuidor/
6. Abra o link no Chrome/Edge - aparecerá o ícone de instalação (seta para baixo) na barra de endereço
7. No Android, aparecerá banner "Instalar App"

## Testado:
- manifest.json válido
- service worker com cache offline
- ícones 32px até 512px com propósito maskable
- start_url e scope relativos para funcionar em subpastas do GitHub
- Compatível com Chrome, Edge, Firefox, Safari, Opera

## Importante:
- GitHub Pages já fornece HTTPS obrigatório para PWA
- Não use caminho absoluto /sw.js, use ./sw.js (já corrigido)
