import { useState } from "react";
import { Box, Card, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyup = () => {
    setInputValue("");
  };

  return (
    <Card>
      <Box p={2} display="flex" alignItems="center">
        <SearchIcon />
        <Input
          disableUnderline
          fullWidth
          sx={{ marginLeft: (theme) => theme.spacing(2) }}
          onChange={handleInputChange}
          onSubmit={handleInputKeyup}
          placeholder="Enter a keyword"
          value={inputValue}
        />
      </Box>
    </Card>
  );
};

export default SearchBar;
