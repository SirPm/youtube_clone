import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(searchTerm);
        setSearchTerm('');
    }

    const handleChange = (e) => setSearchTerm(e.target.value);

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={ handleSubmit }>
                <TextField 
                    fullWidth 
                    label='Search here...' 
                    value={ searchTerm }
                    onChange={ handleChange }
                />
            </form>
        </Paper>
    )
}

export default SearchBar;