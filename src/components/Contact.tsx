/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Flex, Image, Text, Title } from "@mantine/core";
// @ts-ignore
import PipitLogo from "./assets/Group 2 2.svg";
// @ts-ignore
import MessageIcon from "./assets/Frame.svg";
// @ts-ignore
import ContactIcon from "./assets/Frame (1).svg";

function Contact() {
  return (
    <Box bg={"#1C2341"} c="#FFFFFF" className="contact">
      <Flex justify={"space-between"} pl={140}>
        <Box w={"354px"}>
          <Image
            src={PipitLogo}
            w={"126.15px"}
            h={"80px"}
            mt={60}
            // p={100}
          />
          <Text
            mt={20}
            fw={"600"}
            size="20px"
            style={{
              lineHeight: "28px",
              font: "Proxima Nova",
              letterSpacing: "0.6px",
            }}
          >
            Get your tailored Flight Reservation System from PIPIT for your
            travel business
          </Text>
        </Box>
        <Box w={"288px"} mt={95} mr={200}>
          <Title
            fw={700}
            size={"24px"}
            style={{ lineHeight: "28.8px", font: "Proxima Nova" }}
          >
            Contact us
          </Title>
          <Box mt={20}>
            <Flex gap={"17px"}>
              <Image src={MessageIcon} />
              <Text
                fw={600}
                size="20px"
                style={{
                  textDecoration: "underline",
                  lineHeight: "28px",
                  font: "Proxima Nova",
                }}
              >
                sales@mypipit.com
              </Text>
            </Flex>
            <Flex gap={"17px"} mt={15}>
              <Image src={ContactIcon} />
              <Text
                fw={600}
                size="20px"
                style={{
                  textDecoration: "underline",
                  lineHeight: "28px",
                  font: "Proxima Nova",
                }}
              >
                +977-9801190674
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Title
        fw={400}
        size={"16px"}
        style={{
          font: "Proxima Nova",
          display: "flex",
          justifyContent: "center",
        }}
        mt={40}
        pb={40}
      >
        Pipit ©2024. All Rights Reserved.
      </Title>
    </Box>
  );
}

export default Contact;
