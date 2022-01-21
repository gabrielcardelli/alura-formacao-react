import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario ({aoEnviar}) {

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  
  const validacoes = useContext(ValidacoesCadastro);
  const [erros,validarCampos,possoEnviar] = useErros(validacoes);

    

  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({email,senha});
      }
    }}>
      <TextField 
        value={email}
     
        onChange={(e) => setEmail(e.target.value)}
        required 
        id="email" 
        label="email" 
        type="email" 
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField 
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onChange={(e) => setSenha(e.target.value)}
        required 
        id="senha" 
        name="senha"
        onBlur={validarCampos}
        label="senha" 
        type="password" 
        variant="outlined"
        margin="normal"
        fullWidth />
        
      <Button variant="contained" color="primary" type="submit">Próximo</Button>
    </form>
  );

}

export default DadosUsuario;