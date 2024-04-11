/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Box,
  Card,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  Text,
  Title,
} from "@mantine/core";

// @ts-ignore
import BackgroundImage1 from "./assets/background (6).svg";
// @ts-ignore
import BackgroundImage2 from "./assets/background (1).svg";
// @ts-ignore
import BackgroundImage3 from "./assets/background (2).svg";
// @ts-ignore
import BackgroundImage4 from "./assets/background (3).svg";
// @ts-ignore
import BackgroundImage5 from "./assets/background (4).svg";
// @ts-ignore
import BackgroundImage6 from "./assets/background (5).svg";
// @ts-ignore
import Desktop from "../components/assets/Desktop - 17.svg";
// @ts-ignore
import Addsign from "../components/assets/add-circle.svg";

type BackgroundImage =
  | typeof BackgroundImage1
  | typeof BackgroundImage2
  | typeof BackgroundImage3
  | typeof BackgroundImage4
  | typeof BackgroundImage5
  | typeof BackgroundImage6;

const backgroundImages: { image: BackgroundImage; text: string }[] = [
  {
    image: BackgroundImage1,
    text: "Domestic and International Flight Booking",
  },
  {
    image: BackgroundImage2,
    text: "Real Time Integration with Global Distribution Systems",
  },
  { image: BackgroundImage3, text: "B2B and B2C Capabilities" },
  { image: BackgroundImage4, text: "In-depth Booking Analytics and Reporting" },
  { image: BackgroundImage5, text: "Agent and Branch Management Tools" },
  { image: BackgroundImage6, text: "Secure Payment Gateway Integration" },
];
interface DataItem {
  text: string;
  imageSrc: string;
}

const data: DataItem[] = [
  { text: "Pipit Agent", imageSrc: Addsign },
  { text: "Pipit B2C", imageSrc: Addsign },
  { text: "Pipit Premium", imageSrc: Addsign },
];

const listItems: string[] = [
  "Centralized platform to manage contracts, commissions, and agent activity through a centralized platform",
  "Comprehensive reporting and analytics tools tailored for wholesalers, and travel consolidators",
  "Tailored for wholesalers, and travel consolidators",
];

function FeatureSection() {
  return (
    <Box w={"1,440px"} h={"750px"} mt={30} bg={"#FFFFFF"}>
      <Flex justify={"center"} align={"center"} wrap="wrap">
        {backgroundImages.map(({ image, text }, index) => (
          <Card
            // pb={30}
            key={index}
            // w={"360px"}
            // h={"266px"}
            w={{ _: "100%", sm: "calc(80% / 3)" }}
            style={{
              //   border: "1px solid red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={image} w={350} mt={-60} />
            <Text
              mt={-70}
              w={"272px"}
              //   h={"56px"}
              fw={700}
              size="20px"
              style={{
                lineHeight: "28px",
                textAlign: "center",
                font: "Proxima Nova",
                color: "#474E6C",
              }}
            >
              {text}
            </Text>
          </Card>
        ))}
      </Flex>
      <Box mt={200} style={{ font: "Proxima Nova" }} c={"#222A4E"}>
        <Box
          style={{
            lineHeight: "48px",
            display: "grid",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            size={"40px"}
            fw={700}
            style={{
              lineHeight: "48px",
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
              letterSpacing: "1px",
            }}
          >
            What Can You Get?
          </Text>
          <Text
            mt={20}
            fw={400}
            size="20px"
            c={"#474E6C"}
            style={{
              lineHeight: "28px",
              font: "Proxima Nova",
            }}
          >
            Delivering a hassle-free experience for both you and your customers.
          </Text>
        </Box>
        <Flex justify={"center"} align={"center"} gap={30} mt={60}>
          <Image src={Desktop} />
          <Group
            w={"570px"}
            h={"544px"}
            // style={{ border: "1px solid red" }}
            bg="#FFFFFF"
          >
            <Group
              // mt={-140}
              h={"220px"}
              style={{
                boxShadow: "0px 8px 12px 0px rgba(22, 61, 62, 0.1)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Title
                mt={-5}
                ml={40}
                style={{
                  lineHeight: "38.4px",
                  letterSpacing: "1px",
                }}
                fw={700}
                size={"32px"}
                c={"#222A4E"}
              >
                Pipit B2B
              </Title>
              {/* <List
                ml={40}
                mb={15}
                // mt={5}
                style={{ color: "#606882", fontSize: "16px" }}
              >
                <ListItem fw={400}>
                  Centralized platform to manage contracts, commissions, and
                  agent activity through a centralized platform
                </ListItem>
                <ListItem mt={10} fw={400}>
                  Comprehensive reporting and analytics tools Tailored for
                  wholesalers, and travel consolidators
                </ListItem>
                <ListItem mt={10} fw={400}>
                  Tailored for wholesalers, and travel consolidators
                </ListItem>
              </List> */}
              <List
                ml={40}
                mb={15}
                style={{
                  color: "#606882",
                  fontSize: "16px",
                  alignItems: "center",
                }}
              >
                {listItems.map((item, index) => (
                  <ListItem key={index} mt={index > 0 ? 4 : 0} fw={400}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Group>
            <Box style={{ font: "Proxima Nova" }} c={"#222A4E"}>
              {/* <Flex
                justify={"space-between"}
                align={"center"}
                p={10}
                mt={50}
                // mt={index === 0 ? 50 : 0}
                style={{
                  // boxShadow: "0px 8px 12px 0px rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.15)",
                  borderRadius: "4px",
                }}
                w={"570px"}
                h={"96px"}
              >
                <Title
                  fw={700}
                  size={"28px"}
                  style={{ lineHeight: "34.1px" }}
                  ml={42}
                >
                  PiPit Agent
                </Title>{" "}
                <Image src={Addsign} />{" "}
              </Flex> */}
              {data.map((item, index) => (
                <Flex
                  key={index}
                  justify={"space-between"}
                  align={"center"}
                  p={10}
                  mb={20}
                  style={{
                    boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.15)",
                    borderRadius: "4px",
                  }}
                  w={"570px"}
                  h={"96px"}
                >
                  <Title
                    fw={700}
                    size={"28px"}
                    style={{ lineHeight: "34.1px" }}
                    ml={42}
                  >
                    {item.text}
                  </Title>{" "}
                  <Image src={item.imageSrc} />{" "}
                </Flex>
              ))}
            </Box>
          </Group>
        </Flex>
      </Box>
    </Box>
  );
}

export default FeatureSection;
