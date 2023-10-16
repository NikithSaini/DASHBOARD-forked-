import React from "react";
import { Grid, Paper, Typography, ButtonBase } from "@mui/material";
import { Box } from "@mui/material";
import "./card.css";

function HorizontalCard() {
  const items = [
    {
      title: "$198K",
      description: "↑ 37.8% this month",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VfUkdrSqut3UEGDlsMkNfqy2J6hJDjhsMg&usqp=CAU",
      name: "Earning"
    },
    {
      title: "$2.4K",
      description: "↓ 2% this month",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVQpKrV5hMjhC7f3n2ZL8CgYZWQUqYKWi7g&usqp=CAU",
      name: "Orders"
    },
    {
      title: "$2.4K",
      description: "↓ 2% this month",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31LsIPmJTRJzPlp7EyB2gueqfPJGI0GRQhg&usqp=CAU",
      name: "Balance"
    },
    {
      title: "$89K",
      description: "↑ 11% this week",
      imageUrl:
        "https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png",
      name: "Total Sales"
    }
  ];

  return (
    <Box>
      <Grid container spacing={2} marginY>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper className="PaperContainer">
              <ButtonBase>
                <img
                  src={item.imageUrl}
                  className="CardImage"
                  alt={item.title}
                />
              </ButtonBase>
              <div className="CardContent">
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HorizontalCard;
