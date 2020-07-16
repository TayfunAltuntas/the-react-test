import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';

function Formulaire() {
    return (
        <FormControl>
            <TextField id="standard-basic" label="prenom" />
            <TextField id="standard-basic" label="nom" />
            <TextField id="standard-basic" label="adresse" />
            <Button>Valider</Button>
        </FormControl>

    );
};

export default Formulaire;