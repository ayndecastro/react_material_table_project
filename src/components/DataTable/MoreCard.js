import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MoreCard = ({ header, company, coverage }) => {
  const theme = useTheme();
  return (
    <Card sx={theme.components.moreCard}>
      <CardContent sx={theme.components.cardContent1}>
        <Typography variant="subtitle2">Affidavit No {header}</Typography>
      </CardContent>
      <CardContent sx={theme.components.cardContent2}>
        <Typography variant="subtitle2" sx={theme.components.cardItem}>
          Company(s):
        </Typography>
        <Typography variant="body2">{company}</Typography>
        <Typography variant="subtitle2" sx={theme.components.cardItem}>
          Coverage:
        </Typography>
        <Typography variant="body2">{coverage}</Typography>
      </CardContent>
    </Card>
  );
};

export default MoreCard;
