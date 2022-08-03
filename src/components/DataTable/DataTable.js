import React, { useState } from "react";
import MaterialTable, { MTableCell, MTableBodyRow } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { columns } from "./columns";
import { options, actions, style } from "./tableFeatures";
import { useTheme } from "@mui/material/styles";
import CustomCell from "./CustomCell";
import { Typography, Box } from "@mui/material";
import "./table.css";

const DataTable = ({ rows }) => {
  const theme = useTheme();
  const [filter, setFilter] = useState(false);
  const [density, setDensity] = useState("normal");

  return (
    <Box
      sx={{
        ...theme.components.table,
        [theme.breakpoints.down("md")]: {
          m: 0,
        },
      }}
      className="css-override"
    >
      <MaterialTable
        title=""
        columns={[
          ...columns,
          {
            title: "Proc State",
            field: "procState",
            emptyValue: "-",
            type: "string",
            width: "100px",
            align: "right",
            render: (rowData) => (
              <Box style={theme.components.procBox1}>
                <Box style={theme.components.procBox2}>
                  <Typography>{rowData.procState}</Typography>
                </Box>
                <Box>
                  <CustomCell company={rowData.company} />
                </Box>
              </Box>
            ),
          },
        ]}
        data={rows}
        components={{
          Cell: (props) => {
            return (
              <MTableCell
                style={theme.components.mtTableCell}
                {...props}
              ></MTableCell>
            );
          },
          Row: (props) => <MTableBodyRow id={props.data.id} {...props} />,
        }}
        options={options(theme, ExportPdf, ExportCsv, filter, density)}
        actions={actions(filter, setFilter, density, setDensity)}
      ></MaterialTable>
    </Box>
  );
};

export default DataTable;
