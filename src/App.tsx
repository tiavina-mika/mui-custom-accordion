import { Box, Stack, Typography } from "@mui/material";
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
      <Stack spacing={4}>
        {items.map((item, index) => (
          <Stack key={item.title + index} spacing={2}>
            <Box>
              <Typography sx={{ textTransform: "capitalize" }}>
                {item.title}
              </Typography>
            </Box>
            <Box>
              {item.content.map((subItem, subIndex) => (
                <Accordion key={subItem.question + subIndex}>
                  <AccordionSummary
                    expandIcon={<button>Cool</button>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{subItem.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{subItem.response}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default App;
