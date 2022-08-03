import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";

const options = (theme, ExportPdf, ExportCsv, filter, density) => {
  return {
    Selection: true,
    columnsButton: true,
    paging: true,
    pageSize: 10,
    emptyRowsWhenPaging: false,
    pageSizeOptions: [10, 25, 50, 100],
    tableLayout: "fixed",
    cellStyle: theme.typography,
    minBodyHeight: "500px",
    headerStyle: {
      ...theme.components.headerStyle,
      backgroundColor: theme.palette.grid.main.header,
    },
    exportMenu: [
      {
        label: "Export PDF",
        exportFunc: (cols, datas) =>
          ExportPdf(cols, datas, "Affidavit_Inquiry"),
      },
      {
        label: "Export CSV",
        exportFunc: (cols, datas) =>
          ExportCsv(cols, datas, "Affidavit_Inquiry"),
      },
    ],
    filtering: filter,
    padding: density,
    actionsColumnIndex: -1,
  };
};

const actions = (filter, setFilter, density, setDensity) => {
  return [
    {
      icon: filter ? FilterListOffIcon : FilterListIcon,
      tooltip: filter ? "Hide Filter" : "Show Filter",
      isFreeAction: true,
      onClick: () => {
        setFilter(!filter);
      },
    },
    {
      icon: density === "normal" ? DensitySmallIcon : DensityMediumIcon,
      tooltip: "Toggle Density",
      isFreeAction: true,
      onClick: () => {
        density === "normal" ? setDensity("dense") : setDensity("normal");
      },
    },
  ];
};

export { options, actions };
