import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import { useShowRows } from "./hooks/useShowRows";
import "./app.css";

function App() {
  const { showRows, rows } = useShowRows();
  return (
    <ThemeProvider theme={theme}>
      <Header onShowRows={showRows} />
      <DataTable rows={rows} />
    </ThemeProvider>
  );
}

export default App;
