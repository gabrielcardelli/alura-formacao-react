import React from 'react';
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
  return (
    <form  onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField 
        id="cep" 
        label="cep" 
        type="number" 
        variant="outlined"
        margin="normal"
        />

      <TextField 
          id="endereco" 
          label="endereco" 
          type="text" 
          variant="outlined"
          margin="normal"
         fullWidth />

      <TextField 
          id="numero" 
          label="numero" 
          type="number" 
          variant="outlined"
          margin="normal"
          />

      <TextField 
          id="estado" 
          label="estado" 
          type="text" 
          variant="outlined"
          margin="normal"
          />

      <TextField 
          id="cidade" 
          label="cidade" 
          type="text" 
          variant="outlined"
          margin="normal"
          />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;