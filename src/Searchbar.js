import React from "react";
import SearchIcon from "@mui/icons-material/Search"; // Import the search icon
import { Input, InputAdornment } from "@mui/material";

function Searchbar() {
  return (
    <div>
      <Input
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon /> {/* Add the search icon here */}
          </InputAdornment>
        }
      />
    </div>
  );
}

export default Searchbar;
