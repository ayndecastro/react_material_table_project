import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./Search";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { StyledInputBase } from "./StyledInputBase";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useTheme } from "@mui/material/styles";

const Header = ({ onShowRows }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...theme.components.header,
        [theme.breakpoints.down("md")]: {
          m: 0,
          my: 3,
        },
      }}
    >
      <Typography variant="h6">Affidavit Inquiry</Typography>
      <Typography variant="caption">
        Search by Affidavit No, Batch No, or Insured Name...
      </Typography>
      <Box style={{ display: "flex" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase inputProps={{ "aria-label": "search" }} />
        </Search>
        <Button
          onClick={onShowRows}
          sx={{
            border: "solid 1px",
            mx: 2,
            color: "secondary.main",
            py: 0,
            px: 2,
          }}
        >
          <ManageSearchIcon /> <Typography variant="button">Search</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
