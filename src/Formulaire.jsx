import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';

function Formulaire() {
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [adresse, setAdresse] = useState("");

    return (
        <FormControl>
            <TextField id="standard-basic" label="prenom" inputProps={prenom} onChange={(element) => {setPrenom(element)}}/>
            <TextField id="standard-basic" label="nom" inputProps={nom} onChange={(element) => { setNom(element) }}/>
            <TextField id="standard-basic" label="adresse" inputProps={adresse} onChange={(element) => { setAdresse(element) }}/>
            <Button>Valider</Button>
        </FormControl>

    );
};

export default Formulaire;