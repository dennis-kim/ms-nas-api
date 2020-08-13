import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchSceen( { actionName, searchWord, handlerEnter, handlerTextFieldChange, handlerListClick } ) {

    const keyHandler = (e) => {
        if(e.keyCode === 13) {
            handlerEnter();
        }
    }
    return (
        <>
            <TextField id="outlined-search" size="small" type="search" variant="outlined" value={searchWord} onChange={(e) => handlerTextFieldChange(e.target.value)} onKeyDown={(e) => keyHandler(e)}/>
            <SearchIcon fontSize="large" style={{verticalAlign: 'middle'}} onClick={handlerEnter} />
            <Button color="primary" onClick={handlerListClick}>{actionName}</Button>
        </>
    )
}