import { Box } from "@mui/material";
import Image from "next/image";

import Region from "./region";

const RegionList = () => {
  //const lightC = "#1E1E1E";
  //const darkC = "#181818";
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
      }}
    >
      <Box paddingY={1}>
        <Image src={"./vct.svg"} alt="temp" width={350} height={40}></Image>
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
