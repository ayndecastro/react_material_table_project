import React from "react";
import { Popper, ClickAwayListener, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import MoreCard from "./MoreCard";
import { useShowCard } from "../../hooks/useShowCard";

const CustomCell = ({ company }) => {
  const { anchorEl, open, handleClick, handleClickAway } = useShowCard();

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: "relative" }}>
        <IconButton onClick={handleClick}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </IconButton>
        {open ? (
          <Popper anchorEl={anchorEl} open={open}>
            {" "}
            <MoreCard
              header={company.header}
              company={company.company}
              coverage={company.coverage}
            />
          </Popper>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default CustomCell;
