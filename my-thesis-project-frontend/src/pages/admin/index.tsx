import * as React from "react";
import { Box } from "@mui/material";
import PageBar from "@/features/presentation/components/PageBar";
import CreateCarPage from "@/features/presentation/components/CreateCarPage";

export default function AdminPage() {
  return (
    <Box>
      <PageBar />
      <CreateCarPage />
    </Box>
  );
}
