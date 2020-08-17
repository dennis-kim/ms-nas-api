import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MaterialList from "@material-ui/core/List";
import ListItem from './ListRow';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  }));


const List = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect( () => {
      getContents();
    }, [])  
    
  const getContents = () => {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
        }
    }

    Axios.get("/contents")
    .then(response => {
        // response.status 200
        setData(response.data)
    })
    .catch(error => {
        console.log(error);
    })
  }
    
    
  const createItems = () => {
    return(
      data.map(
        (item, i) =>  <ListItem key={i} item={item} isUnderLine={true}/>
      )
    )
  }

  return (
      <>
          <MaterialList className={classes.root}>
            { createItems() }
          </MaterialList>
      </>
  )
}

export default List;