import { SyntheticEvent, useMemo, useState } from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// dummy translated file
import fr from "./faqs.json";
import parseHtml from "html-react-parser";

interface IContent {
  question: string;
  response: string;
}

interface Item {
  title: string;
  content: IContent[];
}

const getBorder = (isFirstItem: boolean) => ({
  backgroundImage:
    "linear-gradient(to right, rgb(34, 34, 34) 0 10%, rgba(255, 255, 255, 0) 10%)",
  backgroundPosition: isFirstItem ? "top" : "bottom",
  backgroundSize: "8px 1px",
  backgroundRepeat: "repeat-x",
  // remove the default border bottom
  "&:before": {
    backgroundColor: "transparent !important"
  }
});

// --------- button --------- //
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  paddingLeft: 16,
  paddingRight: 16,
  fontWeight: 600,
  textTransform: "inherit",
  background: "transparent",
  border: "1px solid" + theme.palette.secondary.main,
  color: theme.palette.secondary.main,
  "&:hover": {
    background: theme.palette.secondary.main,
    color: "#fff"
  },
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));

// --------- accordion summary --------- //
type StyledAccordionSummaryProps = {
  isFirstItem: boolean;
};
const StyledAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== "isFirstItem"
})<StyledAccordionSummaryProps>(({ isFirstItem }) => ({
  backgroundColor: "none",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)"
  },
  padding: "clamp(20px,3vw,30px) 0",
  fontSize: "clamp(16px, 14.5915492958px + 0.2816901408vw, 20px)",
  ...getBorder(isFirstItem)
}));

const Faqs = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    _: SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  // data
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

  return (
    <Stack spacing={22}>
      {items.map((item, index) => (
        <Stack key={item.title + index} spacing={12}>
          <Box>
            <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
              {item.title}
            </Typography>
          </Box>
          <Box>
            {item.content.map((subItem, subIndex) => (
              <Accordion
                elevation={0}
                key={subItem.question + subIndex}
                expanded={expanded === "panel" + subIndex}
                onChange={handleChange("panel" + subIndex)}
                sx={subIndex === 0 ? undefined : getBorder(true)}
              >
                <StyledAccordionSummary
                  isFirstItem={subIndex === 0}
                  expandIcon={<StyledButton>View more</StyledButton>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    {subItem.question}
                  </Typography>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 22, fontWeight: 400 }}
                  >
                    {parseHtml(subItem.response)}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default Faqs;
