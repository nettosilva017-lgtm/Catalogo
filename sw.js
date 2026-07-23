// No console do navegador ou Node.js
fetch('produtos.json')
  .then(r => r.json())
  .then(data => {
    // Ordenar alfabeticamente e converter para maiúsculas
    const ordenados = data.sort((a, b) => 
      (a.name || '').toUpperCase().localeCompare((b.name || '').toUpperCase())
    );
    
    // Garantir maiúsculas
    ordenados.forEach(p => {
      if (p.name) p.name = p.name.toUpperCase();
    });
    
    console.log(JSON.stringify(ordenados, null, 2));
  });