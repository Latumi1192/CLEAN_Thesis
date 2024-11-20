import LeasingDropdown from "@/features/presentation/components/LeasingDropdown";
import PageBar from "@/features/presentation/components/PageBar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <PageBar />
      <LeasingDropdown />
    </Box>
  );
}
