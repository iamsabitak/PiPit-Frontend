/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Anchor, Box, Button, Flex, Image, Text } from "@mantine/core";

// @ts-ignore
import Desktop from "./assets/Desktop - 6 2.svg";
// @ts-ignore
import ArrowIcon from "./assets/Vector.svg";

function MainContent() {
  return (
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
            Build and Upgrade Your Flight Reservation With Pipit Booking Engine
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
            Delivering a hassle-free experience for both you and your customers.
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
  );
}

export default MainContent;
