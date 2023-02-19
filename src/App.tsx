import { Box, Typography } from "@mui/material";
import Faqs from "./Faqs";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Faqs />
      <div>
        <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
          <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
            <Typography>By Tiavina Michael Ralainirina</Typography>
          </a>
        </Box>
      </div>
    </Box>
  );
};

export default App;
