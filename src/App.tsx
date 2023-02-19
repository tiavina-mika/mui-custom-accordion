import { Box } from "@mui/material";
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
    </Box>
  );
};

export default App;
