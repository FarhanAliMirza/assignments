import React from "react";
import {
  Text,
  Heading,
  Link,
  Button,
  ButtonGroup,
  Stack,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const SendMoney = () => {
  return (
    <div>
      <Card w={"sm"}>
        <CardHeader textAlign={"center"}>
          <Heading size="2xl">Send Money</Heading>
        </CardHeader>
        <CardBody>
          <Stack gap={0}>
            <Text fontSize="lg" as={"kbd"} mb={"3"} textAlign={"center"}>
              Hakirat
            </Text>
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="green.500"
                fontSize="1.2em"
              >
                ₹
              </InputLeftElement>
              <Input placeholder="1,000" type="number" mb={3} />
            </InputGroup>
            <ButtonGroup className="flex justify-end">
              <Button colorScheme="blue" mt={3}>
                Send
              </Button>
              <Button colorScheme="gray" mt={3}>
                Cancel
              </Button>
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default SendMoney;
