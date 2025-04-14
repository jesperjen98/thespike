import { Box } from "@mui/material";
import Image from "next/image";

import { theme } from "../theme";
import Region from "./region";

const RegionList = () => {
  //const [selectedRegion, setSelectedRegion] = useState("");

  // const handleRegionClick = (region: string) => {
  //   setSelectedRegion(region);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        padding: 2,
        border: 2,

        borderColor: theme.highlight,
      }}
    >
      <Box paddingY={1}>
        <Image src={"./VCT.svg"} alt="vct" width={350} height={40}></Image>
      </Box>

      <Region></Region>
      <Region></Region>
      <Region></Region>
      <Region></Region>
      <Region></Region>
    </Box>
  );
};

export default RegionList;
