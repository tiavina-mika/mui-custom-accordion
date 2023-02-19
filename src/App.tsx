import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import fr from "./faqs.json";
import { useMemo } from "react";

interface IContent {
  question: string;
  response: string;
}

interface Item {
  title: string;
  content: IContent[];
}

const App = () => {
  const items = useMemo((): Item[] => {
    const keys = Object.keys(fr);
    return keys.map((key: string) => {
      return {
        title: key,
        // remove key, we just need the contents
        content: Object.keys(fr[key]).map(
          (subKey: string) => (fr[key] as any)[subKey]
        )
      };
    });
  }, []);

  console.log(items);

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<button>Cool</button>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default App;
