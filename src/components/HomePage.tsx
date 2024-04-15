/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Anchor, Box, Button, Flex, Group, Image, Text } from "@mantine/core";
// @ts-ignore
import PipitNavLogo from "../components/assets/Frame 1.svg";
// @ts-ignore
import Desktop from "../components/assets/Desktop - 6.svg";
// @ts-ignore
import ArrowIcon from "../components/assets/Vector.svg";
// @ts-ignore
import MenuIcon from "../components/assets/menu.svg";
import { useState } from "react";

function HomePage() {
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
        className="container"
        w={"1,440px"}
        // h={"750px"}
        bg={
          "linear-gradient(90deg, rgba(219,249,255,1) 0%, rgba(181,242,255,1) 55%, rgba(155,175,242,1) 140%)"
        }
      >
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
            </Group>
          </Group>
        </Flex>
        <Box className="content" pb={100}>
          <Flex
            className="flex"
            gap={"33px"}
            justify={"center"}
            align={"center"}
            mt={50}
            //   w={"1,121px"}
            p={3}
          >
            <Box w={"589px"} h={"351px"} className="flexbox">
              <Box
                mt={-40}
                ml={40}
                className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}
                style={{ display: isMenuOpen ? "grid" : "none" }}
              >
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
                    What can you get?
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
              </Box>
              <Text
                className="text"
                mt={4}
                h={"174px"}
                fw={700}
                size="48px"
                c={"#222A4E"}
                ml={34}
                style={{
                  lineHeight: "57.6px",
                  letterSpacing: "1.1px",
                  font: "Proxima Nova",
                }}
              >
                Build and Upgrade Your Flight Reservation With Pipit Booking
                Engine
              </Text>
              <Text
                mt={20}
                w={"478px"}
                h={"56px"}
                fw={400}
                size="20px"
                c={"#474E6C"}
                ml={34}
                style={{
                  lineHeight: "28px",
                  font: "Proxima Nova",
                }}
              >
                Delivering a hassle-free experience for both you and your
                customers.
              </Text>
              <Button
                mt={31}
                ml={32}
                w={"194px"}
                h={"64px"}
                color="#00B4BA"
                size="16px"
                style={{ boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.15)" }}
              >
                <Anchor
                  href="https://calendly.com/d/ckfg-58x-59t/pipit-demo"
                  style={{ textDecoration: "none" }}
                  c={"#FFFFFF"}
                >
                  <Text fw={700} style={{ lineHeight: "22.4px" }}>
                    {" "}
                    Request a demo
                  </Text>
                </Anchor>
                <Image
                  className="dashboard-img"
                  src={ArrowIcon}
                  ml={11}
                  style={{ boxShadow: "0 4px 38px 0 rgba(0, 0, 0, 0.25)" }}
                />
              </Button>
            </Box>
            <Image src={Desktop} className="dashboardImg" />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
