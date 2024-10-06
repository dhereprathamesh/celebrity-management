import React from "react";
import { Input, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <StyledInput
      placeholder="Search user"
      startAdornment={
        <InputAdornment position="start">
          <IconButton>
            <Search />
          </IconButton>
        </InputAdornment>
      }
      disableUnderline
      className="search-input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{
        width: "60%",
        border: "2px solid #a6a5a5",
        borderRadius: "13px",
        padding: "5px 10px",
      }}
    />
  );
};

export default SearchInput;

const StyledInput = styled(Input)`
  width: 60%;
  border: 2px solid #a6a5a5;
  border-radius: 13px;
  padding: 5px 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
