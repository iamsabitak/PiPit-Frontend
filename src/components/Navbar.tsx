/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Anchor, Box, Flex, Group, Image, Text } from "@mantine/core";

// @ts-ignore
import PipitNavLogo from "./assets/Frame 1.svg";
// @ts-ignore
import MenuIcon from "./assets/menu.svg";
// @ts-ignore
import CancelIcon from "./assets/cancel.svg";

import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <Box
        bg={"#ffff"}
        w={"505px"}
        h={1100}
        pl={35}
        className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}
        style={{
          display: isMenuOpen ? "grid" : "none",
          justifyContent: "center",
          boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.15)",
        }}
      >
        <Flex
          justify={"space-evenly"}
          align={"center"}
          gap={70}
          ml={400}
          mt={-95}
        >
          <Image
            src={PipitNavLogo}
            className="navbar-img"
            w={90}
            h={43}
            mr={60}
          />
          <Image
            src={CancelIcon}
            onClick={hideMenu}
            w={70}
            h={40}
            style={{ cursor: "pointer" }}
          />
        </Flex>
        <Anchor
          href="#"
          style={{ textDecoration: "none" }}
          onClick={hideMenu}
          mt={-100}
        >
          <Text
            style={{ lineHeight: "22.4px" }}
            fw={600}
            size="16px"
            c={"#222A4E"}
          >
            What can you get?
          </Text>
        </Anchor>
        <Anchor
          href="#"
          style={{ textDecoration: "none" }}
          onClick={hideMenu}
          mt={-319}
        >
          <Text
            style={{ lineHeight: "22.4px" }}
            fw={600}
            size="16px"
            c={"#222A4E"}
          >
            Benefits
          </Text>
        </Anchor>
        <Anchor
          href="#"
          style={{ textDecoration: "none" }}
          onClick={hideMenu}
          mt={-536}
        >
          <Text
            // mt={-560}
            style={{ lineHeight: "22.4px" }}
            fw={600}
            size="16px"
            c={"#222A4E"}
          >
            Contact
          </Text>
        </Anchor>
      </Box>
      <Flex justify={"center"} p={30} className="flex-container">
        <Group
          className="navbar"
          w={"1121px"}
          h={"78px"}
          bg={"#FFFFFF"}
          justify={"space-between"}
          align={"center"}
          p={25}
          style={{
            borderRadius: "4px",
            boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.15)",
            // position: "sticky", // make the navbar sticky
            // top: "0", // stick it to the top of the viewport
            // zIndex: "999", // ensure it's above other content
          }}
        >
          <Flex justify={"space-between"} gap={430} align={"center"}>
            {window.innerWidth <= 789 && (
              <Box
                ml={-180}
                className={`toggle-btn ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <Image src={MenuIcon} className="menuicon" />
              </Box>
            )}
            <Image
              src={PipitNavLogo}
              w={"68px"}
              h={"38px"}
              className="navbar-img"
              style={{ justifyContent: "center" }}
            />
          </Flex>
          <Group gap={"48px"} className="navbar-link">
            <Anchor href="#" style={{ textDecoration: "none" }}>
              <Text
                style={{ lineHeight: "22.4px" }}
                fw={600}
                size="16px"
                c={"#222A4E"}
              >
                What can you get?
              </Text>
            </Anchor>

            <Anchor href="#" style={{ textDecoration: "none" }}>
              <Text
                style={{ lineHeight: "22.4px" }}
                fw={600}
                size="16px"
                c={"#222A4E"}
              >
                Benefits
              </Text>
            </Anchor>
            <Anchor
              href="#"
              style={{ textDecoration: "none" }}
              onClick={hideMenu}
            >
              <Text
                style={{ lineHeight: "22.4px" }}
                fw={600}
                size="16px"
                c={"#222A4E"}
              >
                Contact
              </Text>
            </Anchor>
          </Group>
        </Group>
      </Flex>
    </>
  );
}

export default Navbar;
