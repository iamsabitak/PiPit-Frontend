/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Box, Card, Flex, Image, Text } from "@mantine/core";

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

function FeatureSection() {
  return (
    <Box
      // w={"1121px"}
      // h={"750px"}
      // mt={30}
      bg={"#FFFFFF"}
      // className="FeatureSection"
      // justify={"center"}
      // align={"center"}
      className="container"
    >
      <Flex
        justify={"center"}
        align={"center"}
        wrap="wrap"
        className="FeatureSection1"
        // gap={30}
      >
        {backgroundImages.map(({ image, text }, index) => (
          <Card
            key={index}
            h={"350px"}
            w={{ _: "100%", sm: "calc(80% / 3)" }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              // border: "1px solid red",
            }}
          >
            <Image
              src={image}
              w={350}
              mt={-60}
              // style={{ boxShadow: "#CCF0F1" }}
            />
            <Text
              mt={-70}
              w={"272px"}
              //   h={"56px"}
              fw={700}
              size="1rem"
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
    </Box>
  );
}

export default FeatureSection;
