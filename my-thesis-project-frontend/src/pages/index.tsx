import HomePage from "@/features/presentation/components/HomePage";
import PageBar from "@/features/presentation/components/PageBar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <PageBar />
      <HomePage />
    </Box>
  );
}
