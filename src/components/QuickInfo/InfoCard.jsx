import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 210,
    maxHeight: 330,
    backgroundColor: "#2e3b55",
    textAlign: "left",
    marginLeft: "30%",
    marginTop: "20%",
    borderRaduis: "30px"
  },
  media: {
    maxWidth: 210,
    paddingTop: "50%"
  },

  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://disease.sh/assets/img/flags/dz.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Confirmed :
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Deceased :
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Recovered :
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Critical :
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Active :
        </Typography>
      </CardContent>
    </Card>
  );
}
