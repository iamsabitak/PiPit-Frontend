import { Box, Text } from "@mantine/core";

function PipitBenefitsTable() {
  return (
    <Box bg="#CCF0F133" mt={130} w={"1,440px"} h={"668px"}>
      <Box
        style={{
          lineHeight: "48px",
          display: "grid",
          font: "Proxima Nova",
          justifyContent: "center",
        }}
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
    </Box>
  );
}

export default PipitBenefitsTable;
