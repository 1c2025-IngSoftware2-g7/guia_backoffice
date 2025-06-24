import { Typography, Box, useTheme } from "@mui/material";
import ShowScreenshot from "./show_screenshot";
import { tokens } from "../theme";

export default function ScreenshotRow({ screenshots }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      gap="30px"
      px="20px"
      style={{ mb: "40px", paddingBottom: "40px" }}
    >
      {screenshots.map((s, index) => (
        <ShowScreenshot
          key={index}
          img_path={s.img_path}
          description={s.description}
        />
      ))}
    </Box>
  );
}
