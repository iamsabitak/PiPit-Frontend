// import MainContent from "./MainContent";

// import Navbar from "./Navbar";

// import { Box } from "@mantine/core";

// function HomePage() {
//   return (
//     <>
//       <Box
//         className="container"
//         w={"1,440px"}
//         bg={
//           "linear-gradient(90deg, rgba(219,249,255,1) 0%, rgba(181,242,255,1) 55%, rgba(155,175,242,1) 140%)"
//         }
//       >
//         <Navbar />
//         <MainContent />
//       </Box>
//     </>
//   );
// }

// export default HomePage;
import FeaturePresentation from "./FeaturePresentation";
import FeatureSection from "./FeatureSection";
import MainContent from "./MainContent";

import Navbar from "./Navbar";

import { Box, Flex } from "@mantine/core";
import PipitBenefitsTable from "./PipitBenefitsTable";
import Banners from "./Banners";
import Contact from "./Contact";

function HomePage() {
  return (
    <Flex
    // className="container"
      direction={"column"}
      // justify={"center"}
      // align={"center"}
      // wrap={"wrap"}
    >
      <Box
        className="container"
        // w={"1,440px"}
        bg={
          "linear-gradient(90deg, rgba(219,249,255,1) 0%, rgba(181,242,255,1) 55%, rgba(155,175,242,1) 140%)"
        }
      >
        <Navbar />
        <MainContent />
      </Box>
      <FeatureSection />
      <FeaturePresentation />
      <PipitBenefitsTable />
      <Banners />
      <Contact />
    </Flex>
  );
}

export default HomePage;
