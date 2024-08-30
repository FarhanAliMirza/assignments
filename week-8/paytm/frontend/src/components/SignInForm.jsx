import React from "react";
import {
  Text,
  Heading,
  Link,
  Button,
  Stack,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const SignInForm = () => {
  return (
    <div>
      <Card w={"sm"}>
        <CardHeader>
          <Heading size="lg">Sign in</Heading>
        </CardHeader>
        <CardBody>
          <Stack gap={0}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="abc@xyz.com" type="email" mb={3} />
            <FormLabel>Password</FormLabel>
            <Input placeholder="helloworld" type="password" mb={3} />

            <Button colorScheme="blue" mt={3} alignSelf={"center"}>
              Sign in
            </Button>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter textAlign={"center"}>
          <Text as={"i"}>
            Don't have an account ?{" "}
            <Link href="/signup" textColor={"blue"}>
              Sign up
            </Link>
          </Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInForm;
