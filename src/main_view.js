import { Typography, Box, useTheme } from "@mui/material";
import ScreenshotSection from "./components/screenshots_section";
import { tokens } from "./theme";
import foto1 from "./screenshots/demo.png";
import MembersSection from "./components/members_section";
import AppIntroduction from "./components/app_introduction";

const demo_screenshot = {
  img_path: foto1,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export default function MainView() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="60px"
      mb="40px"
    >
      <Box textAlign={"center"}>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          GUIA DE USO DEL BACKOFFICE
        </Typography>
        <Typography
          variant="h4"
          color={colors.greenAccent[400]}
          style={{ paddingBottom: "20px" }}
        >
          ClassConnect (solo admins)
        </Typography>
        <AppIntroduction />
        <ScreenshotSection
          screenshots={[
            demo_screenshot,
            demo_screenshot,
            demo_screenshot,
            demo_screenshot,
            demo_screenshot,
            demo_screenshot,
          ]}
        />
        <MembersSection />
      </Box>
    </Box>
  );
}
