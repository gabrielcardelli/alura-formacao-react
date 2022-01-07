import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario ({aoEnviar}) {

  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField 
        required 
        id="email" 
        label="email" 
        type="email" 
        variant="outlined"
        margin="normal"
        fullWidth />

      <TextField 
        required 
        id="senha" 
        label="senha" 
        type="password" 
        variant="outlined"
        margin="normal"
        fullWidth />
        
      <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
    </form>
  );

}

export default DadosUsuario;