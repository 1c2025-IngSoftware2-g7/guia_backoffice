import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ScreenshotRow from "./screenshot_row";

export default function ScreenshotSection({ screenshots }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box textAlign="center" mb="40px">
      <Typography
        variant="h3"
        fontWeight="bold"
        color={colors.grey[100]}
        sx={{ mb: 2 }}
      >
        Screenshots
      </Typography>

      <ScreenshotRow screenshots={[screenshots[0], screenshots[1]]} />
      <ScreenshotRow screenshots={[screenshots[2], screenshots[3]]} />
      <ScreenshotRow screenshots={[screenshots[4], screenshots[5]]} />
    </Box>
  );
}
