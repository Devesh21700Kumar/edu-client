import React from "react";
import {
  List,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";

export default function TabList(props) {
  return (
    <List style={{ margin: 0, padding: 0 }}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <ListItem key={index}>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography variant="body2" style={{ marginBottom: "4px" }}>{`Chapter ${
                    index + 1
                  }: How to start With WD`}</Typography>
                </React.Fragment>
              }
              secondary={
                <Typography variant="caption">
                  <i>
                    50 Minutes by Anuj Garg{" "}
                    <span style={{ color: "#4C0098" }}>Available in 2 days</span>{" "}
                  </i>
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <IconButton>{/* <IonIcon src={playCircleOutline} /> */}</IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
