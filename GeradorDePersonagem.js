function gerarNome() {
    const vogais = 'aeiou';
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
  
    const tamanhoNome = Math.floor(Math.random() * 3) + 4; 
    let nome = '';
  
    for (let i = 0; i < tamanhoNome; i++) {
      if (i % 2 === 0) {
        nome += consoantes[Math.floor(Math.random() * consoantes.length)];
      } else {
        nome += vogais[Math.floor(Math.random() * vogais.length)];
      }
    }
  
    nome = nome.charAt(0).toUpperCase() + nome.slice(1); 
  
    document.getElementById('nomeGerado').textContent = nome;
  }