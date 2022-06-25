import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/Header";
import OptionsTab from "components/OptionsTab";
import LocationCards from "components/LocationCards";
import Container from "@mui/material/Container";
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
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, hight: 100, overflowY: "scroll" }}>
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
