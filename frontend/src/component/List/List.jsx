import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MaterialList from "@material-ui/core/List";
import ListItem from './ListRow';
import api from '../../api';

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
      api.getContents()
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(function () {
                console.log("finally");
            })
    }, [])  
    
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