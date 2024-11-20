import * as React from "react";
import LoginForm from "@/features/presentation/components/LoginForm";
import { Box } from "@mui/material";
import PageBar from "@/features/presentation/components/PageBar";

export default function LoginPage() {
  return (
    <Box>
      <PageBar />
      <LoginForm />
    </Box>
  );
}
