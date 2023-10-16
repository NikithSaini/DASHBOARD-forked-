import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Rectangle
} from "recharts";
import "./graph.css";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 8 },
  { name: "Apr", value: 12 },
  { name: "May", value: 10 },
  { name: "Jun", value: 15 },
  { name: "Jul", value: 8 },
  { name: "Aug", value: 12 },
  { name: "Sep", value: 10 },
  { name: "Oct", value: 15 },
  { name: "Nov", value: 8 },
  { name: "Dec", value: 12 }
];

function BarGraph() {
  const activeIndex = 5;

  return (
    <Paper elevation={1}>
      <Box className="container" marginX>
        <h2>Overview</h2>
        <p>Monthly Earning</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={300} height={150} data={data}>
            <XAxis dataKey="name" axisLine={false} />
            <YAxis hide={true} />
            <Tooltip />
            <Bar dataKey="value" Rectangle radius={15}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  cursor="pointer"
                  fill={index === activeIndex ? "#9400d3" : "#E6E6FA"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default BarGraph;
