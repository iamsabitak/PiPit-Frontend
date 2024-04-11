/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  Text,
  Title,
} from "@mantine/core";
// @ts-ignore
import Desktop from "../components/assets/Desktop - 17.svg";
// @ts-ignore
import Addsign from "../components/assets/add-circle.svg";

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

function FeaturePresentation() {
  return (
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
          mt={30}
        >
          <Group
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
                  boxShadow: "0px 8px 12px 0px rgba(22, 61, 62, 0.1)",
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
  );
}

export default FeaturePresentation;
