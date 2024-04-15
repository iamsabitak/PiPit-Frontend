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
  { text: "Pipit Lite", imageSrc: Addsign },
  { text: "Pipit Flights", imageSrc: Addsign },
];

const listItems: string[] = [
  "Domestic and International Flights",
  "Manage organization, branches",
  "Booking portal for branches",
  "Onboard and Manage multiple agents",
  "Booking portal for agents",
  "Customizable B2C booking portal for your customers",
];

function FeaturePresentation() {
  return (
    <Box
      mt={70}
      style={{ font: "Proxima Nova" }}
      c={"#222A4E"}
      className="FeaturePresentation"
    >
      <Box
        style={{
          lineHeight: "48px",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Text
          size={"40px"}
          fw={700}
          style={{
            lineHeight: "48px",
            display: "flex",
            justifyContent: "center",
            letterSpacing: "1px",
          }}
        >
          What Can You Get?
        </Text>
        <Text
          className="FeaturePresentation-text"
          mt={20}
          fw={400}
          size="20px"
          c={"#474E6C"}
          style={{
            lineHeight: "28px",
          }}
        >
          Delivering a hassle-free experience for both you and your customers.
        </Text>
      </Box>
      <Flex
        justify={"center"}
        align={"center"}
        gap={60}
        mt={60}
        className="FeaturePresentation"
      >
        <Image src={Desktop} h={350} mt={-50} />
        <Group w={"530px"} h={"544px"} bg="#FFFFFF" mt={-10}>
          <Group
            h={"240px"}
            style={{
              boxShadow: "0px 8px 12px 0px rgba(22, 61, 62, 0.1)",
              borderRadius: "4px",
            }}
            className="featurepresentation1"
          >
            <Title
              mt={-5}
              ml={29}
              style={{
                lineHeight: "38.4px",
                letterSpacing: "1px",
              }}
              fw={700}
              size={"32px"}
              c={"#222A4E"}
            >
              Pipit Premium
            </Title>
            <List
              ml={40}
              mb={15}
              style={{
                color: "#474E6C",
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
          <Box c={"#222A4E"} mt={-50} className="featurepresentation2">
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
                w={"530px"}
                h={"96px"}
              >
                <Title
                  fw={700}
                  size={"28px"}
                  style={{ lineHeight: "34.1px" }}
                  ml={29}
                >
                  {item.text}
                </Title>{" "}
                <Image src={item.imageSrc} mr={20} />{" "}
              </Flex>
            ))}
          </Box>
        </Group>
      </Flex>
    </Box>
  );
}

export default FeaturePresentation;
