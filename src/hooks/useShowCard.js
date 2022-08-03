import React, { useState } from "react";

const useShowCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event, id) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(open ? false : true);
  };

  const handleClickAway = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return {
    anchorEl,
    setAnchorEl,
    open,
    setOpen,
    handleClick,
    handleClickAway,
  };
};

export { useShowCard };
