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


const List = ( { contentsData } ) => {
  const classes = useStyles();

    
  const createItems = () => {
    return(
      contentsData.map(
        (item, i) =>  <ListItem key={i} item={item} isUnderLine={true}/>
      )
    )
  }

  return (
      <>
          <MaterialList className={classes.root}>
            { contentsData ? createItems() : <></> }
          </MaterialList>
      </>
  )
}

export default List;