/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Text, Flex, Image, Card, Title } from "@mantine/core";
// @ts-ignore
import BackgroundImage1 from "./assets/Background (1) 2.svg";
// @ts-ignore
import BackgroundImage2 from "./assets/Background (2) 2.svg";
// @ts-ignore
import BackgroundImage3 from "./assets/Background (3) 2.svg";

type BackgroundImage =
  | typeof BackgroundImage1
  | typeof BackgroundImage2
  | typeof BackgroundImage3;

const backgroundImages: {
  image: BackgroundImage;
  text: string;
  title: string;
}[] = [
  {
    image: BackgroundImage1,
    title: "Travel Agencies",
    text: "Boost Sales & customer satisfaction with seamless online customer bookings, and advanced analytics. ",
  },
  {
    image: BackgroundImage2,
    title: "Wholesalers",
    text: "Access both B2B and B2C portals for efficient inventory management and expanded distribution channels.",
  },
  {
    image: BackgroundImage3,
    title: "Travel Management Companies",
    text: "Optimize operations with Pipit's dedicated B2B portal, tailored for corporate booking needs.",
  },
];

function PipitBenefitsTable() {
  return (
    <Box
      bg="#CCF0F133"
      mt={90}
      w={"1,440px"}
      // h={"690px"}
      pt={10}
      pb={50}
      className="PipitBenefitsTable"
    >
      <Box
        style={{
          lineHeight: "48px",
          display: "grid",
          font: "Proxima Nova",
          justifyContent: "center",
        }}
        className="PipitBenefitsTable-text"
      >
        <Text
          mt={115}
          size={"40px"}
          fw={700}
          c="#222A4E"
          style={{
            lineHeight: "48px",
            display: "flex",
            justifyContent: "center",
            letterSpacing: "1px",
            font: "Proxima Nova",
          }}
        >
          Who Can Benefit From Pipit?
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
      <Box mt={50}>
        <Flex justify={"center"} align={"center"} wrap="wrap" gap={"24px"}>
          {backgroundImages.map(({ image, text, title }, index) => (
            <Card
            className="pipitebenefitcards"
              h={"350px"}
              pb={30}
              key={index}
              //   w={{ _: "100%", sm: "calc(100% / 3)" }}
              //   w={"360px"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "390px",
                borderRadius: "10px",
              }}
            >
              <Image src={image} w={350} mt={-60} />
              <Title
                mt={-70}
                fw={700}
                size={"20px"}
                c={"#222A4E"}
                style={{ lineHeight: "28px" }}
              >
                {title}
              </Title>
              <Text
                mt={20}
                mb={9}
                w={"312px"}
                fw={400}
                size="16px"
                style={{
                  lineHeight: "22.4px",
                  textAlign: "center",
                  font: "Proxima Nova",
                  color: "#606882",
                }}
              >
                {text}
              </Text>
            </Card>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default PipitBenefitsTable;
