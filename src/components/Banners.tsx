/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Flex, Image, Title } from "@mantine/core";

//@ts-ignore
import Banner1 from "./assets/image 15.svg";
//@ts-ignore
import Banner2 from "./assets/image 16.svg";
//@ts-ignore
import Banner3 from "./assets/image 17.svg";
//@ts-ignore
import Banner4 from "./assets/image 18.svg";
import Contact from "./Contact";

function Banners() {
  return (
    <>
      <Box mt={100} h={"328px"}>
        <Title
          fw={700}
          size={"40px"}
          style={{
            display: "flex",
            justifyContent: "center",
            lineHeight: "48px",
          }}
          c={"#222A4E"}
        >
          Our Partners
        </Title>
        <Flex gap={"80px"} align={"center"} justify={"center"} mt={60}>
          <Image src={Banner1} />
          <Image src={Banner2} />
          <Image src={Banner3} />
          <Image src={Banner4} />
        </Flex>
      </Box>
      <Contact />
    </>
  );
}

export default Banners;
