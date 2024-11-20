import * as React from "react";
import AboutUs from "@/features/presentation/components/AboutUsPage";
import { Box } from "@mui/material";
import PageBar from "@/features/presentation/components/PageBar";

export default function AboutUsPage() {
  return (
    <Box>
      <PageBar />
      <AboutUs />
    </Box>
  );
}
