import MainContent from "./MainContent";

import Navbar from "./Navbar";

import { Box } from "@mantine/core";

function HomePage() {
  return (
    <>
      {/* <Box
        bg={"#ffff"}
        // mt={-60}
        // pl={40}
        // ml={-50}
        w={"305px"}
        className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}
        style={{ display: isMenuOpen ? "grid" : "none", zIndex: "-1" }}
      >
        <Anchor href="#" style={{ textDecoration: "none" }} onClick={hideMenu}>
          <Text
            style={{ lineHeight: "22.4px" }}
            fw={600}
            size="16px"
            c={"#222A4E"}
          >
            What can you get?
          </Text>
        </Anchor>
        <Anchor href="#" style={{ textDecoration: "none" }} onClick={hideMenu}>
          <Text
            style={{ lineHeight: "22.4px" }}
            fw={600}
            size="16px"
            c={"#222A4E"}
          >
            Benefits
          </Text>
        </Anchor>
        <Anchor href="#" style={{ textDecoration: "none" }} onClick={hideMenu}>
          <Text
            style={{ lineHeight: "22.4px" }}
            fw={600}
            size="16px"
            c={"#222A4E"}
          >
            Contact
          </Text>
        </Anchor>
      </Box> */}
      <Box
        className="container"
        w={"1,440px"}
        // h={"750px"}
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
