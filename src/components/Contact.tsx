/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Flex, Image, Text, Title } from "@mantine/core";
// @ts-ignore
import PipitLogo from "./assets/Frame 1 (1).svg";
// @ts-ignore
import MessageIcon from "./assets/Frame.svg";
// @ts-ignore
import ContactIcon from "./assets/Frame (1).svg";

function Contact() {
  return (
    <Flex
      bg={"#1C2341"}
      c="#FFFFFF"
      className="container"
      // className="contact"
      justify={"center"}
      direction={"column"}
      // w={"1121px"}
    >
      <Flex justify={"space-between"} pl={140} className="contactsection">
        <Flex direction={"column"} w={"354px"} justify={"center"}>
          <Image
            src={PipitLogo}
            w={"126.15px"}
            // h={"80px"}
            mt={60}
            // p={100}
          />
          <Text
            className="contact-text"
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
        </Flex>
        <Flex
          // w={"288px"}
          mt={95}
          mr={200}
          className="contactinformation"
          justify={"center"}
          direction={"column"}
        >
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
                }}
              >
                +977-9801190674
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Title
        fw={400}
        size={"16px"}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        mt={40}
        pb={40}
        className="copyright"
      >
        Pipit ©2024. All Rights Reserved.
      </Title>
    </Flex>
  );
}

export default Contact;

// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import { Box, Flex, Image, Text, Title } from "@mantine/core";
// // @ts-ignore
// import PipitLogo from "./assets/Frame 1 (1).svg";
// // @ts-ignore
// import MessageIcon from "./assets/Frame.svg";
// // @ts-ignore
// import ContactIcon from "./assets/Frame (1).svg";

// function Contact() {
//   return (
//     <Box bg={"#1C2341"} c="#FFFFFF" className="contact">
//       <Flex justify={"space-between"} pl={140} className="contactsection">
//         <Box w={"354px"}>
//           <Image
//             src={PipitLogo}
//             w={"126.15px"}
//             // h={"80px"}
//             mt={60}
//             // p={100}
//           />
//           <Text
//             className="contact-text"
//             mt={20}
//             fw={"600"}
//             size="20px"
//             style={{
//               lineHeight: "28px",
//               font: "Proxima Nova",
//               letterSpacing: "0.6px",
//             }}
//           >
//             Get your tailored Flight Reservation System from PIPIT for your
//             travel business
//           </Text>
//         </Box>
//         <Box w={"288px"} mt={95} mr={200} className="contactinformation">
//           <Title
//             fw={700}
//             size={"24px"}
//             style={{ lineHeight: "28.8px", font: "Proxima Nova" }}
//           >
//             Contact us
//           </Title>
//           <Box mt={20}>
//             <Flex gap={"17px"}>
//               <Image src={MessageIcon} />
//               <Text
//                 fw={600}
//                 size="20px"
//                 style={{
//                   textDecoration: "underline",
//                   lineHeight: "28px",
//                   font: "Proxima Nova",
//                 }}
//               >
//                 sales@mypipit.com
//               </Text>
//             </Flex>
//             <Flex gap={"17px"} mt={15}>
//               <Image src={ContactIcon} />
//               <Text
//                 fw={600}
//                 size="20px"
//                 style={{
//                   textDecoration: "underline",
//                   lineHeight: "28px",
//                 }}
//               >
//                 +977-9801190674
//               </Text>
//             </Flex>
//           </Box>
//         </Box>
//       </Flex>
//       <Title
//         fw={400}
//         size={"16px"}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//         }}
//         mt={40}
//         pb={40}
//         className="copyright"
//       >
//         Pipit ©2024. All Rights Reserved.
//       </Title>
//     </Box>
//   );
// }

// export default Contact;
