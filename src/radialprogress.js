import React from "react";
import { Box, Paper } from "@mui/material";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Container } from "@mui/material";

import "./radialprogressbar.css";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px"
};

const data = [
  {
    uv: 10,
    pv: 50,
    fill: "#8884d8"
  },
  {
    uv: 0,
    pv: 500,
    fill: "#8884d8"
  }
];

function RadialProgressBar() {
  return (
    <Paper elevation={1}>
      <Box marginX>
        <h2>Customers</h2>
        <p>Customers that buy products</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="193px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="url(#GradientColor)"
            strokeWidth="10"
            fill="transparent"
          />
          <text x="80" y="90" textAnchor="middle" fill="#000">
            65% Customers
          </text>
        </svg>
      </Box>
    </Paper>
  );
}

export default RadialProgressBar;
