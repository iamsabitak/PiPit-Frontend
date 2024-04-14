/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Container, Flex, Image, ScrollArea, Title } from "@mantine/core";

//@ts-ignore
import Banner1 from "./assets/image 15.svg";
//@ts-ignore
import Banner2 from "./assets/image 16.svg";
//@ts-ignore
import Banner4 from "./assets/image 17.svg";
//@ts-ignore
import Banner5 from "./assets/image 18.svg";
//@ts-ignore
import Banner6 from "./assets/American_Express.svg";
//@ts-ignore
import Banner3 from "./assets/Galileo-GDS.svg";
//@ts-ignore
import Banner7 from "./assets/MasterCard_Logo.svg";
//@ts-ignore
import Banner8 from "./assets/paypal.svg";
//@ts-ignore
import Banner9 from "./assets/visa card.svg";

function Banners() {
  // Array of banner images
  const bannerImages = [
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5,
    Banner6,
    Banner7,
    Banner8,
    Banner9,
  ];

  return (
    <Container>
      <Box mt={100} h={"328px"} className="banners">
        <Title
          fw={700}
          size={"40px"}
          style={{
            display: "flex",
            justifyContent: "center",
            lineHeight: "48px",
          }}
          styles={{
            root: { "&::-webkit-scrollbar": { display: "none" } },
          }}
          c={"#222A4E"}
        >
          Integrations
        </Title>
        <ScrollArea
          w={"1,120px"}
          h={120}
          styles={{
            viewport: { "&::-webkit-scrollbar": { display: "none" } },
          }}
        >
          <Flex gap={"64px"} mt={60} ml={15}>
            {bannerImages.map((banner, index) => (
              <Image key={index} src={banner} h={"30px"} />
            ))}
          </Flex>
        </ScrollArea>
      </Box>
    </Container>
  );
}

export default Banners;
