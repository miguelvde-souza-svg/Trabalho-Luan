function validarFormulario(dadosFormulario) {
    const erros = [];
  
    for (const [campo, valor] of Object.entries(dadosFormulario)) {
      // Se o valor for string, aplica trim(), senão verifica se é nulo/undefined
      const valorLimpo = typeof valor === 'string' ? valor.trim() : valor;
  
      if (!valorLimpo) {
        erros.push(`O campo '${campo}' é obrigatório e não pode conter apenas espaços.`);
      }
    }
  
    return {
      valido: erros.length === 0,
      erros: erros
    };
  }
  
  // --- Exemplo 1: Cadastro inválido ---
  const formularioInvalido = {
    nome: "  ",             // Inválido (apenas espaços)
    email: "user@test.com", // Válido
    senha: ""              // Inválido (vazio)
  };
  
  console.log(validarFormulario(formularioInvalido));
  /* 
  Resultado:
  {
    valido: false,
    erros: [
      "O campo 'nome' é obrigatório e não pode conter apenas espaços.",
      "O campo 'senha' é obrigatório e não pode conter apenas espaços."
    ]
  }
  */
  
  // --- Exemplo 2: Cadastro válido ---
  const formularioValido = {
    nome: "Carlos Silva",
    email: "carlos@email.com",
    senha: "SenhaSegura123"
  };
  
  console.log(validarFormulario(formularioValido));
  // { valido: true, erros: [] }