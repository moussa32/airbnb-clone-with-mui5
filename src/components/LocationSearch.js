import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { pink } from "@mui/material/colors";
import { IoSearchCircleSharp } from "react-icons/io5";

const choices = [
  { id: 1, text: "Anywhere" },
  { id: 2, text: "Any week" },
  { id: 3, text: "Add guest", withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper sx={{ borderRadius: 20, ml: 15 }} elevation={3}>
      <Stack sx={{ borderRadius: 20, pl: 2 }} divider={<Divider orientation="vertical" flexItem />}>
        {choices.map((item) => {
          return (
            <Button key={item.id}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                {item.text}
              </Typography>
              {item.withIcon && (
                <Box sx={{ ml: 1, mt: 1, mr: 1 }}>
                  <IoSearchCircleSharp color={pink[500]} size={32} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
