import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


const ListRow = ({item, isUnderLine}) => {
    return(
        
        <>
              <ListItem alignItems="flex-start">
                  <ListItemText primary={item.dirName} secondary={
                      <Typography
                          component="span"
                          variant="body2"
                          // className={classes.inline}
                          color="textPrimary"
                      >
                          {item.updateDate}
                      </Typography>
                  }
                  />
                </ListItem>
                <Divider variant="fullWidth" component="li" />
      </>
    )
}

export default ListRow;