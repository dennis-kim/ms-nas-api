import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchSceen() {
    return (
        <>
            <TextField id="outlined-search" size="small" type="search" variant="outlined" />
            <SearchIcon fontSize="large" style={{verticalAlign: 'middle'}}/>
            <Button color="primary">Primary</Button>
        </>
    )
}