import MainContent from "./MainContent";

import Navbar from "./Navbar";

import { Box } from "@mantine/core";

function HomePage() {
  return (
    <>
      <Box
        className="container"
        w={"1,440px"}
        bg={
          "linear-gradient(90deg, rgba(219,249,255,1) 0%, rgba(181,242,255,1) 55%, rgba(155,175,242,1) 140%)"
        }
      >
        <Navbar />
        <MainContent />
      </Box>
    </>
  );
}

export default HomePage;
