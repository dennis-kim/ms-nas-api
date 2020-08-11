import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MaterialList from "@material-ui/core/List";
import ListItem from './ListRow';

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

  const items = [
      {
        itemName: '살아있다 _2020',
        updateDate: '2020.08.08 12:00:00',
        directoryLocation: 'movie/2020'
      },
      {
        itemName: '무한도전',
        updateDate: '2020.07.01 12:00:00',
        directoryLocation: '예능'
      }
  ]
  
  const createItems = () => {
    return(
      items.map(
        (item, i) =>  <ListItem key={i} item={item} isUnderLine={true}/>
      )
    )
  }

const List = () => {
    const classes = useStyles();

    

    return (
        <>
            <MaterialList className={classes.root}>
              { createItems() }
            </MaterialList>
        </>
    )
}

export default List;