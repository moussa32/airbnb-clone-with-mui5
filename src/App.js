import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/Header";
import OptionsTab from "components/OptionsTab";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box>
          <Header />
          <OptionsTab />
        </Box>
      </Box>
    </>
  );
}

export default App;
