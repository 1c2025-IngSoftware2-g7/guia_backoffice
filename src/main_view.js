import { Typography, Box, useTheme } from "@mui/material";
import ScreenshotSection from "./components/screenshots_section";
import { tokens } from "./theme";
import MembersSection from "./components/members_section";
import AppIntroduction from "./components/app_introduction";
import aux from "./screenshots/aux.png";
import courses from "./screenshots/courses.png";
import create_admin from "./screenshots/create_admin.png";
import dashboard from "./screenshots/dashboard.png";
import login from "./screenshots/login.png";
import users from "./screenshots/users.png";
const login_package = {
  img_path: login,
  description:
    "Página de inicio de sesión. Solo permite el acceso a administradores. Expulsa a los administradores bloqueados.",
};

const dashboard_package = {
  img_path: dashboard,
  description:
    "Dashboard. Muestra algunas métricas de los servicios. También te conecta con servicios externos.",
};

const create_admin_package = {
  img_path: create_admin,
  description:
    "Registrar administradores. Te permite crear nuevos administradores. Esta es la única forma de agregar uno nuevo.",
};

const users_package = {
  img_path: users,
  description:
    "Usuarios. Te permite ver a todos los usuarios del sistema. Puedes bloquear o desbloquear usuarios y verificar su estado de verificación.",
};

const courses_package = {
  img_path: courses,
  description:
    "Cursos. Te permite ver todos los cursos en el sistema, la parte más importante de nuestra aplicación.",
};

const aux_package = {
  img_path: aux,
  description:
    "Profesores Auxiliares. Te permite modificar los permisos de los auxiliares, definiendo cómo interactúan con la app y sus estudiantes.",
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
            login_package,
            dashboard_package,
            create_admin_package,
            users_package,
            courses_package,
            aux_package,
          ]}
        />
        <MembersSection />
      </Box>
    </Box>
  );
}
