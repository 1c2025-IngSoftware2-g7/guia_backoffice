import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function ShowScreenshot({ img_path, description }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log("ShowScreenshot", img_path, description);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="30px"
      px="20px"
    >
      <Box textAlign="center">
        <img
          src={img_path}
          alt={img_path}
          style={{
            maxWidth: "500px",
            borderRadius: "10px",
            maxHeight: "500px",
          }}
        />
        <Typography variant="h6" color={colors.grey[100]} mt="10px">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
