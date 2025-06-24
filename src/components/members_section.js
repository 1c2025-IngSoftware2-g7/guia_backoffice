"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  IconButton,
  useTheme,
  Chip,
} from "@mui/material";
import { GitHub, Person } from "@mui/icons-material";
import { tokens } from "../theme";

// URL del repositorio del proyecto
const REPO_URL = "https://github.com/TU_USERNAME/ClassConnect"; // Cambia esto por la URL real de tu repo

const members = [
  {
    name: "Marcelo Origoni",
    github: "MarceloAgustinOrigoniGuillaume",
    role: "Frontend Developer",
  },
  {
    name: "Martina La Rosa",
    github: "larosamf",
    role: "Backend Developer",
  },
  {
    name: "Lucas Gabriel",
    github: "lucas794",
    role: "Backend Developer",
  },
  {
    name: "Tomas Yavicoli",
    github: "Tyavicoli",
    role: "Backend Developer",
  },
  {
    name: "Dolores Levi",
    github: "dlevi150",
    role: "Frontend Developer",
  },
];

export default function MembersSection() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="60px" textAlign="center">
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        color={colors.grey[100]}
        sx={{ mb: 4 }}
      >
        Nuestro Equipo
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {members.map((member, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={idx}>
            <Card
              component="a"
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: `linear-gradient(145deg, ${colors.primary[400]} 0%, ${colors.primary[600]} 100%)`,
                borderRadius: 3,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 12px 24px rgba(0,0,0,0.15)`,
                },
                border: `1px solid ${colors.grey[700]}`,
                minHeight: 190,
                minWidth: 190,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Avatar
                  src={`https://github.com/${member.github}.png`}
                  alt={member.name}
                  sx={{
                    width: 60,
                    height: 60,
                    mb: 2,
                    border: `3px solid ${colors.greenAccent[400]}`,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                    },
                  }}
                  component="a"
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Person />
                </Avatar>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={colors.grey[100]}
                  sx={{ mb: 1 }}
                >
                  {member.name}
                </Typography>

                <Chip
                  label={member.role}
                  size="small"
                  sx={{
                    backgroundColor: colors.greenAccent[400],
                    color: colors.grey[900],
                    fontWeight: "bold",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="body2"
                  color={colors.grey[300]}
                  sx={{ mb: 2, fontSize: "0.85rem" }}
                >
                  @{member.github}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
